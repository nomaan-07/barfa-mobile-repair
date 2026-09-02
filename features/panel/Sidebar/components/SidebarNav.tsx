import { CardContent } from "@/components/ui/card";
import { SidebarNavProps } from "../types";
import SidebarNavItem from "./SidebarNavItem";

function SidebarNav({ items }: SidebarNavProps) {
  return (
    <CardContent>
      <nav className="space-y-2">
        {items.map(({ id, ...item }) => (
          <SidebarNavItem key={id} {...item} />
        ))}
      </nav>
    </CardContent>
  );
}

export default SidebarNav;
