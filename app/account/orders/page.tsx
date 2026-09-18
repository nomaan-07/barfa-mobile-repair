import AccountOrders from "@/features/account/orders/AccountOrders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفارش‌های من",
};

function OrdersPage() {
  return <AccountOrders />;
}

export default OrdersPage;
