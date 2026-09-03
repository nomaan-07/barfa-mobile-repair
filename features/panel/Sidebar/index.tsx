import { Card, CardFooter } from "@/components/ui/card";
import LogoutButton from "./components/LogoutButton";
import SidebarHeader from "./components/SidebarHeader";
import SidebarNav from "./components/SidebarNav";
import { SidebarProps } from "./types";

function Sidebar({ type, items }: SidebarProps) {
  return (
    //
    <aside className="fixed top-0 -right-64 bottom-0 z-50 w-64 shrink-0 max-md:transition-all max-md:duration-300 md:sticky md:top-2 md:right-0 md:h-max">
      <Card
        ref={null}
        className="h-full overflow-auto pt-0 max-md:rounded-none"
      >
        <SidebarHeader type={type} />
        <SidebarNav items={items} />
        <CardFooter className="mt-auto border-none bg-inherit">
          <LogoutButton />
        </CardFooter>
      </Card>
    </aside>
  );
}

export default Sidebar;
