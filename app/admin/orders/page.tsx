import AdminOrdersTable from "@/features/admin/orders/AdminOrdersTable";
import AdminOrdersTableControls from "@/features/admin/orders/AdminOrdersTableControls";
import AdminStatusTabs from "@/features/admin/orders/AdminStatusTabs";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "سفارش‌ها",
};

function OrdersPage() {
  return (
    <Suspense fallback={null}>
      <AdminOrdersTableControls />
      <AdminStatusTabs />
      <AdminOrdersTable />
    </Suspense>
  );
}

export default OrdersPage;
