import { CardHeader } from "@/components/ui/card";
import { SidebarHeaderProps } from "../types";
import EditProfile from "./EditProfile";
import LogoutButton from "./LogoutButton";
import SidebarProfile from "./SidebarProfile";

function SidebarHeader({ type }: SidebarHeaderProps) {
  return (
    <CardHeader className="flex items-center justify-between">
      <SidebarProfile type={type} />

      <div className="flex gap-2">
        <EditProfile />
        <LogoutButton />
      </div>
    </CardHeader>
  );
}

export default SidebarHeader;
