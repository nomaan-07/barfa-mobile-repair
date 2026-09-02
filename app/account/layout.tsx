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
    <div className="mx-auto flex max-w-7xl lg:mt-8 lg:gap-8 lg:px-4">
      <AccountSidebar />
      <section className="w-full space-y-6 md:space-y-8">
        <header className="bg-yellow-600 p-4">Header</header>
        <main className="mx-6 h-52 bg-emerald-600 p-4 lg:mx-0">{children}</main>
      </section>
    </div>
  );
}
