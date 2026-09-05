import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItemProps } from "../types";

function SidebarNavItem({ url, title, icon: Icon }: SidebarNavItemProps) {
  const pathname = usePathname();

  const isCurrentPage = pathname === url;

  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost", size: "lg" }),
        "text-muted-foreground relative flex justify-start",
        isCurrentPage
          ? "text-secondary dark:text-foreground bg-primary hover:text-secondary dark:hover:text-foreground hover:bg-primary dark:hover:bg-primary"
          : "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/30 dark:hover:text-foreground",
      )}

      href={url}
    >
      <Icon data-icon="inline-start" />
      <span>{title}</span>
    </Link>
  );
}

export default SidebarNavItem;
