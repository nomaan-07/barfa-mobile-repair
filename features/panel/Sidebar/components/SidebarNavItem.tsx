import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItemProps } from "../types";

function SidebarNavItem({ url, title, icon: Icon }: SidebarNavItemProps) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "text-muted-foreground hover:bg-primary/5 hover:text-primary relative flex justify-start",
        pathname === url && "text-primary hover:bg-transparent",
      )}
      href={url}
    >
      <Icon data-icon="inline-start" />
      <span>{title}</span>
      {pathname === url && (
        <div className="bg-primary absolute top-2 right-0 h-4 w-0.5" />
      )}
    </Link>
  );
}

export default SidebarNavItem;
