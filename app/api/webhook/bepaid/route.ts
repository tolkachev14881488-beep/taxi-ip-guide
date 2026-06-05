import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import type { BePaidWebhookPayload } from "@/lib/bepaid";
import { getProductPrice } from "@/lib/bepaid";

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as BePaidWebhookPayload;
    const transaction = payload.transaction;

    if (!transaction?.tracking_id) {
      return NextResponse.json({ error: "Missing tracking_id" }, { status: 400 });
    }

    const order = await prisma.order.findUnique({
      where: { accessToken: transaction.tracking_id },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const { amount: expectedAmount, display } = getProductPrice();

    if (
      transaction.amount !== undefined &&
      transaction.amount !== expectedAmount
    ) {
      console.error(
        `Amount mismatch: expected ${expectedAmount}, got ${transaction.amount}`
      );
      return NextResponse.json({ error: "Amount mismatch" }, { status: 400 });
    }

    if (transaction.currency && transaction.currency !== "BYN") {
      return NextResponse.json({ error: "Currency mismatch" }, { status: 400 });
    }

    if (transaction.status === "successful") {
      if (order.status !== "paid") {
        await prisma.order.update({
          where: { id: order.id },
          data: {
            status: "paid",
            bepaidTransactionId: transaction.uid ?? null,
            paidAt: new Date(),
          },
        });
      }
    } else if (transaction.status === "failed") {
      if (order.status === "pending") {
        await prisma.order.update({
          where: { id: order.id },
          data: {
            status: "failed",
            bepaidTransactionId: transaction.uid ?? null,
          },
        });
      }
    }

    console.log(
      `Webhook processed: order=${transaction.tracking_id}, status=${transaction.status}, amount=${display} BYN`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
