import AdminSidebar from "@/features/admin/AdminSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل مدیریت",
  description: "مدیریت سفارش‌ها، مشتریان و امور مالی برفا موبایل.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl md:mt-8 md:gap-8 md:px-4">
      <AdminSidebar />
      <section className="w-full space-y-6 md:space-y-8">
        <header className="bg-yellow-600 p-4">Header</header>
        {/* FIXME: Remove height */}
        <main className="mx-6 h-52 bg-emerald-600 p-4 md:mx-0">{children}</main>
      </section>
    </div>
  );
}
