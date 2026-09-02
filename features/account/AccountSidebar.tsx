import { ClipboardList, House } from "lucide-react";
import Sidebar from "../panel/Sidebar";

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
  return <Sidebar type="user" items={accountMenuItems} />;
}

export default AccountSidebar;
