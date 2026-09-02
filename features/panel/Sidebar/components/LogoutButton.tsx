"use client";

import { LogOut } from "lucide-react";
import SidebarHeaderButton from "./SidebarHeaderButton";

function LogoutButton() {
  return (
    <SidebarHeaderButton
      variant="destructive"
      tooltip="خروج از حساب کاربری"
      icon={LogOut}
      onClick={() => {}}
    />
  );
}

export default LogoutButton;
