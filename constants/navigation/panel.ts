import {
  ClipboardList,
  House,
  LayoutDashboard,
  Settings2,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";

export const accountNavItems = [
  {
    id: "home",
    title: "خانه",
    url: "/account",
    icon: House,
  },
  {
    id: "orders",
    title: "سفارش‌ها",
    url: "/account/orders",
    icon: ClipboardList,
  },
];

export const adminNavItems = [
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
    title: "مشتری‌ها",
    url: "/admin/customers",
    icon: Users,
  },
  {
    id: "finance",
    title: "امور مالی",
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
