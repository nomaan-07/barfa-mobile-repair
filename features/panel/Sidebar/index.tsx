import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./components/SidebarHeader";
import SidebarNav from "./components/SidebarNav";
import { SidebarProps } from "./types";

function Sidebar({ type, items }: SidebarProps) {
  return (
    <aside className="fixed top-0 -right-68 bottom-0 z-50 w-68 shrink-0 max-md:transition-all max-md:duration-300 md:static md:right-0 lg:sticky lg:h-max">
      <Card
        ref={null}
        className="h-full max-lg:rounded-t-none max-lg:rounded-br-none max-lg:rounded-bl-xl max-md:rounded-none"
      >
        <SidebarHeader type={type} />
        <Separator />
        <SidebarNav items={items} />
      </Card>
    </aside>
  );
}

export default Sidebar;
