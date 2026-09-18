import { Card, CardFooter } from "@/components/ui/card";
import Overlay from "@/components/ui/Overlay";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { cn } from "@/lib/utils";
import LogoutButton from "./components/LogoutButton";
import SidebarHeader from "./components/SidebarHeader";
import SidebarNav from "./components/SidebarNav";
import { SidebarProps } from "./types";

function Sidebar({ type, items }: SidebarProps) {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

  return (
    <>
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-64 shrink-0 translate-x-full max-md:transition-transform max-md:duration-300 md:sticky md:top-2 md:h-max md:translate-x-0",
          isMobileMenuOpen && "max-md:translate-x-0",
        )}
      >
        <Card className="h-full overflow-auto pt-0 max-md:rounded-none">
          <SidebarHeader type={type} />
          <SidebarNav items={items} />
          <CardFooter className="mt-auto border-none bg-inherit">
            <LogoutButton />
          </CardFooter>
        </Card>
      </aside>
      <Overlay
        open={isMobileMenuOpen}
        desktopHidden
        onClick={closeMobileMenu}
      />
    </>
  );
}

export default Sidebar;
