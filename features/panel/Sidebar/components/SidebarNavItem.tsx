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
        buttonVariants({ variant: "ghost", size: "lg" }),
        "text-muted-foreground hover:bg-primary/5 hover:text-primary relative flex justify-start",
        pathname === url && "text-primary bg-primary/5",
      )}

      href={url}
    >
      <Icon data-icon="inline-start" />
      <span>{title}</span>
    </Link>
  );
}

export default SidebarNavItem;
