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
  const filePath = path.join(process.cwd(), "content", "instruction.md");
  return readFile(filePath, "utf-8");
}

export default async function InstructionPage({ params }: InstructionPageProps) {
  const { token } = await params;
  const allowed = await hasPaidAccess(token);

  if (!allowed) {
    if (isDatabaseAvailable()) {
      const { prisma } = await import("@/lib/db");
      const order = await prisma.order.findUnique({
        where: { accessToken: token },
      });
      if (!order) notFound();
      redirect("/?payment=pending");
    }
    notFound();
  }

  const content = await getInstructionContent();
  const isDemo = verifyDemoAccessToken(token);

  return (
    <div className="min-h-screen bg-[#070b14]">
      <header className="border-b border-white/5 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-xs font-bold text-[#0b0f19]">
              ИП
            </span>
            <span className="font-display font-semibold text-white">ТаксиПуть</span>
          </Link>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
            {isDemo ? "Демо-доступ" : "Доступ открыт"}
          </span>
        </div>
      </header>

      {isDemo && (
        <div className="border-b border-amber-500/20 bg-amber-500/10 px-4 py-2 text-center text-xs text-amber-200/90">
          Демо-режим: оплата не подключена. После настройки bePaid здесь будет реальная оплата.
        </div>
      )}

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 sm:p-10">
          <InstructionContent content={content} />
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Сохраните страницу в закладках. Материалы носят информационный характер.
        </p>
      </main>
    </div>
  );
}
