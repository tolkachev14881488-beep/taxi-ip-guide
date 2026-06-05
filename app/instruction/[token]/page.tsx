import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";
import { prisma } from "@/lib/db";
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

  const order = await prisma.order.findUnique({
    where: { accessToken: token },
  });

  if (!order) {
    notFound();
  }

  if (order.status !== "paid") {
    redirect("/?payment=pending");
  }

  const content = await getInstructionContent();

  return (
    <div className="gradient-bg min-h-screen">
      <header className="border-b border-white/40 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 text-xs font-bold text-white">
              ИП
            </span>
            <span className="font-semibold text-slate-800">Такси РБ</span>
          </Link>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            Доступ открыт
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="glass-card rounded-3xl p-6 shadow-lg sm:p-10">
          <InstructionContent content={content} />
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Сохраните эту страницу в закладках — доступ по вашей персональной ссылке.
          <br />
          Материалы носят информационный характер и не являются юридической консультацией.
        </p>
      </main>
    </div>
  );
}
