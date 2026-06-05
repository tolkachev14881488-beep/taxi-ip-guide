"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "paid" | "pending" | "error">("loading");

  useEffect(() => {
    if (!token) { setStatus("error"); return; }
    let attempts = 0;
    async function check() {
      try {
        const res = await fetch(`/api/order/${token}`);
        if (!res.ok) { setStatus("error"); return; }
        const data = await res.json();
        if (data.paid) setStatus("paid");
        else if (attempts++ < 15) { setStatus("pending"); setTimeout(check, 2000); }
        else setStatus("pending");
      } catch { setStatus("error"); }
    }
    check();
  }, [token]);

  if (!token || status === "error") {
    return (
      <div className="text-center">
        <h1 className="font-display text-xl font-bold text-white">Ошибка</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Не удалось найти заказ</p>
        <Link href="/" className="btn-primary mt-6 inline-block px-6 py-3 text-sm">На главную</Link>
      </div>
    );
  }

  if (status !== "paid") {
    return (
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
        <p className="mt-4 text-sm text-[var(--muted)]">Подтверждаем оплату...</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
        ✓
      </div>
      <h1 className="font-display mt-4 text-xl font-bold text-white sm:text-2xl">Оплата прошла</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Инструкция готова к просмотру</p>
      <Link href={`/instruction/${token}`} className="btn-primary mt-6 inline-block px-8 py-3.5 text-sm">
        Открыть инструкцию
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="hero-bg flex min-h-screen items-center justify-center px-5 py-12">
      <div className="card w-full max-w-md p-8 sm:p-10">
        <Suspense fallback={<div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />}>
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
