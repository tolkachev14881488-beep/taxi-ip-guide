import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ИП для такси — начните зарабатывать легально | Беларусь",
  description:
    "Пошаговая инструкция по открытию ИП для водителей такси в РБ. Регистрация, налоги, подключение к агрегатору — всё в одном месте.",
  openGraph: {
    title: "ИП для такси — пошаговая инструкция",
    description: "Откройте ИП и начните работать в такси легально за 1–3 дня",
    locale: "ru_BY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${unbounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
