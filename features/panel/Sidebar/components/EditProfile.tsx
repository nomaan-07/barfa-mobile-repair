"use client";

import { Settings } from "lucide-react";
import SidebarHeaderButton from "./SidebarHeaderButton";

function EditProfile() {
  return (
    <SidebarHeaderButton
      variant="outline"
      tooltip="ویرایش حساب کاربری"
      icon={Settings}
      onClick={() => {}}
    />
  );
}

export default EditProfile;
