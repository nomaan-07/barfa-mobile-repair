import AdminOrders from "@/features/admin/orders/AdminOrders";
import { Suspense } from "react";

function OrdersPage() {
  // FIXME: Add skeleton
  return (
    <Suspense fallback={null}>
      <AdminOrders />
    </Suspense>
  );
}

export default OrdersPage;
