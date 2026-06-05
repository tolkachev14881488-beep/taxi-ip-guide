const CHECKOUT_API_URL = "https://checkout.bepaid.by/ctp/api/checkouts";

export interface CreateCheckoutParams {
  amount: number;
  currency: string;
  description: string;
  trackingId: string;
  successUrl: string;
  failUrl: string;
  cancelUrl: string;
  notificationUrl: string;
}

export interface CheckoutResponse {
  token: string;
  redirectUrl: string;
}

export interface BePaidWebhookTransaction {
  uid?: string;
  status?: string;
  amount?: number;
  currency?: string;
  tracking_id?: string;
  test?: boolean;
}

export interface BePaidWebhookPayload {
  transaction?: BePaidWebhookTransaction;
}

function getCredentials(): { shopId: string; secretKey: string } {
  const shopId = process.env.BEPAID_SHOP_ID;
  const secretKey = process.env.BEPAID_SECRET_KEY;

  if (!shopId || !secretKey) {
    throw new Error("BEPAID_SHOP_ID и BEPAID_SECRET_KEY не настроены");
  }

  return { shopId, secretKey };
}

function getAuthHeader(shopId: string, secretKey: string): string {
  return `Basic ${Buffer.from(`${shopId}:${secretKey}`).toString("base64")}`;
}

export async function createCheckout(
  params: CreateCheckoutParams
): Promise<CheckoutResponse> {
  const { shopId, secretKey } = getCredentials();
  const testMode = process.env.BEPAID_TEST_MODE !== "false";

  const body = {
    checkout: {
      test: testMode,
      transaction_type: "payment",
      attempts: 3,
      settings: {
        success_url: params.successUrl,
        fail_url: params.failUrl,
        cancel_url: params.cancelUrl,
        notification_url: params.notificationUrl,
        language: "ru",
        button_next_text: "Вернуться на сайт",
      },
      order: {
        currency: params.currency,
        amount: params.amount,
        description: params.description,
        tracking_id: params.trackingId,
      },
    },
  };

  const response = await fetch(CHECKOUT_API_URL, {
    method: "POST",
    headers: {
      Authorization: getAuthHeader(shopId, secretKey),
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-Version": "2",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    const message =
      typeof data.message === "string"
        ? data.message
        : "Ошибка создания платежа bePaid";
    throw new Error(message);
  }

  const token = data.checkout?.token;
  const redirectUrl = data.checkout?.redirect_url;

  if (!token || !redirectUrl) {
    throw new Error("bePaid не вернул token или redirect_url");
  }

  return { token, redirectUrl };
}

export function getProductPrice(): { amount: number; display: string } {
  const priceByn = Number(process.env.PRODUCT_PRICE_BYN ?? "49");
  const amount = Math.round(priceByn * 100);
  return {
    amount,
    display: priceByn.toFixed(0),
  };
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
