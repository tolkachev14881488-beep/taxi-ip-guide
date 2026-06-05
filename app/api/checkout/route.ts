import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  createDemoAccessToken,
  isDatabaseAvailable,
  isDemoMode,
} from "@/lib/access";
import { createCheckout, getProductPrice, getSiteUrl } from "@/lib/bepaid";

export async function POST() {
  try {
    const { amount, display } = getProductPrice();
    const siteUrl = getSiteUrl();

    if (isDemoMode()) {
      let accessToken: string;

      if (isDatabaseAvailable()) {
        const order = await prisma.order.create({
          data: {
            amount,
            currency: "BYN",
            status: "paid",
            paidAt: new Date(),
          },
        });
        accessToken = order.accessToken;
      } else {
        accessToken = createDemoAccessToken();
      }

      const successUrl = `${siteUrl}/success?token=${encodeURIComponent(accessToken)}`;

      return NextResponse.json({
        redirectUrl: successUrl,
        accessToken,
        demo: true,
      });
    }

    const order = await prisma.order.create({
      data: {
        amount,
        currency: "BYN",
        status: "pending",
      },
    });

    const token = order.accessToken;
    const successUrl = `${siteUrl}/success?token=${token}`;
    const failUrl = `${siteUrl}/?payment=failed`;
    const cancelUrl = `${siteUrl}/?payment=cancelled`;
    const notificationUrl = `${siteUrl}/api/webhook/bepaid`;

    const checkout = await createCheckout({
      amount,
      currency: "BYN",
      description: `Инструкция по открытию ИП для такси (${display} BYN)`,
      trackingId: token,
      successUrl,
      failUrl,
      cancelUrl,
      notificationUrl,
    });

    return NextResponse.json({
      redirectUrl: checkout.redirectUrl,
      token: checkout.token,
      accessToken: token,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    const message =
      error instanceof Error ? error.message : "Ошибка создания платежа";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
