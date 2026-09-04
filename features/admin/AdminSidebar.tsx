"use client";

import { adminNavItems } from "@/constants/navigation/panel";
import Sidebar from "../panel/Sidebar";

function AdminSidebar() {
  return <Sidebar type="admin" items={adminNavItems} />;
}

export default AdminSidebar;
