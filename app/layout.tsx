import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazirmatn",
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
    <html lang="fa" dir="rtl" className={cn("font-sans", inter.variable)}>
      <body className={`${vazirmatn.variable} font-vazirmatn`}>{children}</body>
    </html>
  );
}
