import { ClipboardList, House } from "lucide-react";

const accountMenuItems = [
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

function AccountSidebar() {
  return <div></div>;
}

export default AccountSidebar;
