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
      <aside className="fixed top-0 -right-64 bottom-0 w-64 shrink-0 bg-red-600 p-4 md:static md:right-0 lg:sticky lg:h-max">
        sidebar
      </aside>
      <section className="w-full space-y-6 md:space-y-8">
        <header className="bg-yellow-600 p-4">Header</header>
        <main className="mx-6 h-52 bg-emerald-600 p-4 lg:mx-0">{children}</main>
      </section>
    </div>
  );
}
