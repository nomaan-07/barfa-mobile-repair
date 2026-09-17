import AdminOrdersTable from "@/features/admin/orders/AdminOrdersTable";
import AdminOrdersTableControls from "@/features/admin/orders/AdminOrdersTableControls";
import AdminStatusTabs from "@/features/admin/orders/AdminStatusTabs";
import { Suspense } from "react";

function OrdersPage() {
  // FIXME: Add skeleton
  return (
    <Suspense fallback={null}>
      <AdminOrdersTableControls />
      <AdminStatusTabs />
      <AdminOrdersTable />
    </Suspense>
  );
}

export default OrdersPage;
