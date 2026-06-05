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
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Что-то пошло не так
        </h1>
        <p className="mt-3 text-slate-600">
          Не удалось найти информацию об оплате. Обратитесь в поддержку.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-2xl bg-sky-500 px-8 py-3 font-medium text-white"
        >
          На главную
        </Link>
      </div>
    );
  }

  if (status === "loading" || status === "pending") {
    return (
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Подтверждаем оплату...
        </h1>
        <p className="mt-3 text-slate-600">
          Пожалуйста, подождите несколько секунд. Страница обновится автоматически.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <svg
          className="h-8 w-8 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
        Оплата прошла успешно!
      </h1>
      <p className="mt-3 text-slate-600">
        Ваша инструкция по открытию ИП для такси готова. Сохраните ссылку — она
        останется доступной.
      </p>
      <Link
        href={`/instruction/${token}`}
        className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-200/50 transition hover:shadow-xl"
      >
        Открыть инструкцию
      </Link>
      <p className="mt-6 text-sm text-slate-500">
        Персональная ссылка:{" "}
        <span className="break-all font-mono text-sky-600">
          /instruction/{token}
        </span>
      </p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="gradient-bg flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-card w-full max-w-lg rounded-3xl p-8 shadow-xl sm:p-12">
        <Suspense
          fallback={
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
