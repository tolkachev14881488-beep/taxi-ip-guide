import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const order = await prisma.order.findUnique({
    where: { accessToken: token },
    select: {
      status: true,
      paidAt: true,
      createdAt: true,
    },
  });

  if (!order) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    status: order.status,
    paid: order.status === "paid",
    paidAt: order.paidAt,
    createdAt: order.createdAt,
  });
}
