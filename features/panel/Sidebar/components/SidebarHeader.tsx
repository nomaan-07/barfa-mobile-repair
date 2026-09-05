import Logo from "@/components/shared/Logo";
import { CardHeader } from "@/components/ui/card";
import { SidebarHeaderProps } from "../types";
import EditProfile from "./EditProfile";

import MobileMenuCloseButton from "./MobileMenuCloseButton";
import SidebarProfile from "./SidebarProfile";

function SidebarHeader({ type }: SidebarHeaderProps) {
  return (
    <CardHeader className="bg-primary flex flex-col gap-4 py-4 text-white max-lg:rounded-t-none">
      <div className="max-md:flex max-md:w-full max-md:items-center max-md:justify-between">
        <Logo color="secondary" size="small" />
        <MobileMenuCloseButton />
      </div>
      <div className="flex w-full items-center justify-between">
        <SidebarProfile type={type} />
        <EditProfile />
      </div>
    </CardHeader>
  );
}

export default SidebarHeader;
