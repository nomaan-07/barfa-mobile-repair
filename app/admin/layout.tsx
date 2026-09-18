import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import AdminSidebar from "@/features/admin/AdminSidebar";
import PanelHeader from "@/features/panel/PanelHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "برفا موبایل | %s",
    default: "پنل مدیریت",
  },
  description: "مدیریت سفارش‌ها، مشتریان و امور مالی برفا موبایل.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileMenuProvider>
      <div className="mx-auto mb-8 flex max-w-7xl md:mt-8 md:gap-8 md:px-4">
        <AdminSidebar />
        <section className="w-full min-w-0 space-y-6 md:space-y-8">
          <PanelHeader />
          <main className="space-y-6 max-md:mx-6">{children}</main>
        </section>
      </div>
    </MobileMenuProvider>
  );
}
