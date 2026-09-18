import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import AccountSidebar from "@/features/account/AccountSidebar";
import PanelHeader from "@/features/panel/PanelHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "برفا موبایل | %s",
    default: "حساب کاربری",
  },
  description: "مدیریت حساب کاربری و سفارش‌های تعمیرات برفا موبایل.",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileMenuProvider>
      <div className="mx-auto mb-8 flex max-w-7xl md:mt-8 md:gap-8 md:px-4">
        <AccountSidebar />
        <section className="w-full min-w-0 space-y-6 md:space-y-8">
          <PanelHeader />
          <main className="space-y-6 max-md:mx-6">{children}</main>
        </section>
      </div>
    </MobileMenuProvider>
  );
}
