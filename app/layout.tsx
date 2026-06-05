import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ИП для такси — пошаговая инструкция | Беларусь",
  description:
    "Помощь в открытии ИП для работы в такси в Республике Беларусь. Пошаговая инструкция после оплаты.",
  openGraph: {
    title: "ИП для такси — пошаговая инструкция",
    description: "Откройте ИП для работы в такси в РБ за один день",
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
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
