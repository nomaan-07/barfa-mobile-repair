import AccountSidebar from "@/features/account/AccountSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حساب کاربری",
  description: "مدیریت حساب کاربری و سفارش‌های تعمیرات برفا موبایل.",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl md:mt-8 md:gap-8 md:px-4">
      <AccountSidebar />
      <section className="w-full space-y-6 md:space-y-8">
        <header className="bg-yellow-600 p-4">Header</header>
        {/* FIXME: Remove height */}
        <main className="mx-6 h-52 bg-emerald-600 p-4 md:mx-0">{children}</main>
      </section>
    </div>
  );
}
