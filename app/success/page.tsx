"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "paid" | "pending" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    let attempts = 0;
    const maxAttempts = 15;

    async function checkStatus() {
      try {
        const response = await fetch(`/api/order/${token}`);
        if (!response.ok) {
          setStatus("error");
          return;
        }
        const data = await response.json();
        if (data.paid) {
          setStatus("paid");
        } else if (attempts < maxAttempts) {
          attempts += 1;
          setStatus("pending");
          setTimeout(checkStatus, 2000);
        } else {
          setStatus("pending");
        }
      } catch {
        setStatus("error");
      }
    }

    checkStatus();
  }, [token]);

  if (!token || status === "error") {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
          <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="font-display mt-6 text-2xl font-bold text-white">
          Что-то пошло не так
        </h1>
        <p className="mt-3 text-slate-400">
          Не удалось найти информацию об оплате.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-block rounded-2xl px-8 py-3">
          На главную
        </Link>
      </div>
    );
  }

  if (status === "loading" || status === "pending") {
    return (
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-amber-500/20 border-t-amber-400" />
        <h1 className="font-display mt-6 text-2xl font-bold text-white">
          Подтверждаем оплату...
        </h1>
        <p className="mt-3 text-slate-400">
          Подождите несколько секунд
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
        <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="font-display mt-6 text-2xl font-bold text-white sm:text-3xl">
        Оплата прошла успешно!
      </h1>
      <p className="mt-3 text-slate-400">
        Инструкция готова. Сохраните ссылку — доступ не ограничен по времени.
      </p>
      <Link
        href={`/instruction/${token}`}
        className="btn-primary mt-8 inline-block rounded-2xl px-10 py-4 text-lg"
      >
        Открыть инструкцию
      </Link>
      <p className="mt-6 text-sm text-slate-600">
        <span className="font-mono text-amber-400/80">/instruction/{token}</span>
      </p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="hero-mesh flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <Suspense
          fallback={
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-500/20 border-t-amber-400" />
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
