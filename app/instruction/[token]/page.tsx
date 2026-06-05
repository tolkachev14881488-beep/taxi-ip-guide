import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";
import {
  hasPaidAccess,
  isDatabaseAvailable,
  verifyDemoAccessToken,
} from "@/lib/access";
import { InstructionContent } from "@/components/InstructionContent";

interface InstructionPageProps {
  params: Promise<{ token: string }>;
}

async function getInstructionContent(): Promise<string> {
  return readFile(path.join(process.cwd(), "content", "instruction.md"), "utf-8");
}

export default async function InstructionPage({ params }: InstructionPageProps) {
  const { token } = await params;
  const allowed = await hasPaidAccess(token);

  if (!allowed) {
    if (isDatabaseAvailable()) {
      const { prisma } = await import("@/lib/db");
      const order = await prisma.order.findUnique({ where: { accessToken: token } });
      if (!order) notFound();
      redirect("/?payment=pending");
    }
    notFound();
  }

  const content = await getInstructionContent();
  const isDemo = verifyDemoAccessToken(token);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
        <div className="container-main flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-xs font-bold text-[#0a0e17]">
              ИП
            </span>
            <span className="font-display text-sm font-semibold text-white">ТаксиПуть</span>
          </Link>
          <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            {isDemo ? "Демо" : "Доступ открыт"}
          </span>
        </div>
      </header>

      {isDemo && (
        <div className="border-b border-[var(--accent)]/20 bg-[var(--accent-soft)] py-2.5 text-center text-xs text-[var(--accent)]">
          Демо-режим — оплата не подключена
        </div>
      )}

      <main className="container-main py-10 sm:py-14">
        <div className="card p-6 sm:p-10">
          <InstructionContent content={content} />
        </div>
      </main>
    </div>
  );
}
