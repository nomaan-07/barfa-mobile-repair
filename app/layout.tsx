import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lalezar, Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-lalezar",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "برفا موبایل | %s",
    default: "برفا موبایل | مرکز تخصصی تعمیرات موبایل",
  },
  description:
    "برفا موبایل، تعمیرات تخصصی انواع گوشی‌های سامسونگ، شیائومی و سایر برندها با بهترین کیفیت و قیمت مناسب.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(vazirmatn.variable, lalezar.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
