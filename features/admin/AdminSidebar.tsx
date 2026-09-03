"use client";

import {
  ClipboardList,
  LayoutDashboard,
  Settings2,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import Sidebar from "../panel/Sidebar";

const adminMenuItems = [
  {
    id: "dashboard",
    title: "داشبورد",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    id: "orders",
    title: "سفارش‌ها",
    url: "/admin/orders",
    icon: ClipboardList,
  },
  {
    id: "customers",
    title: "مشتریان",
    url: "/admin/customers",
    icon: Users,
  },
  {
    id: "finance",
    title: "مالی",
    url: "/admin/finance",
    icon: Wallet,
  },
  {
    id: "staff",
    title: "کارکنان",
    url: "/admin/staff",
    icon: UserCog,
  },
  {
    id: "website",
    title: "تنظیمات سایت",
    url: "/admin/website",
    icon: Settings2,
  },
];

function AdminSidebar() {
  return <Sidebar type="admin" items={adminMenuItems} />;
}

export default AdminSidebar;
