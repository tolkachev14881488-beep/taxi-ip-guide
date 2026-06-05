import crypto from "crypto";

const DEMO_PREFIX = "demo.";

export function isBePaidConfigured(): boolean {
  return Boolean(process.env.BEPAID_SHOP_ID && process.env.BEPAID_SECRET_KEY);
}

export function isDemoMode(): boolean {
  if (process.env.DEMO_MODE === "false") return false;
  return process.env.DEMO_MODE === "true" || !isBePaidConfigured();
}

function getDemoSecret(): string {
  return process.env.DEMO_SECRET ?? "taxi-ip-demo-secret";
}

export function createDemoAccessToken(): string {
  const payload = {
    id: crypto.randomUUID(),
    exp: Date.now() + 365 * 24 * 60 * 60 * 1000,
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto
    .createHmac("sha256", getDemoSecret())
    .update(data)
    .digest("base64url");
  return `${DEMO_PREFIX}${data}.${sig}`;
}

export function verifyDemoAccessToken(token: string): boolean {
  if (!token.startsWith(DEMO_PREFIX)) return false;

  const raw = token.slice(DEMO_PREFIX.length);
  const dot = raw.lastIndexOf(".");
  if (dot === -1) return false;

  const data = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);

  const expected = crypto
    .createHmac("sha256", getDemoSecret())
    .update(data)
    .digest("base64url");

  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(data, "base64url").toString("utf-8")
    ) as { exp?: number };
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function isDatabaseAvailable(): boolean {
  const url = process.env.DATABASE_URL ?? "";
  if (!url) return false;
  if (process.env.VERCEL === "1" && url.startsWith("file:")) return false;
  return true;
}

export async function hasPaidAccess(token: string): Promise<boolean> {
  if (verifyDemoAccessToken(token)) return true;

  if (!isDatabaseAvailable()) return false;

  const { prisma } = await import("@/lib/db");
  const order = await prisma.order.findUnique({
    where: { accessToken: token },
    select: { status: true },
  });

  return order?.status === "paid";
}
