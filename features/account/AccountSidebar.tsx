"use client";

import { accountNavItems } from "@/constants/navigation/panel";
import Sidebar from "../panel/Sidebar";

function AccountSidebar() {
  return <Sidebar type="user" items={accountNavItems} />;
}

export default AccountSidebar;
