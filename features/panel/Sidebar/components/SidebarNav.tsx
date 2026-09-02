import { CardContent } from "@/components/ui/card";
import { SidebarNavProps } from "../types";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SidebarNav({ items }: SidebarNavProps) {
  return (
    <CardContent className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.id}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-muted-foreground hover:bg-primary/5 hover:text-primary flex justify-start",
          )}
          href={item.url}
        >
          <item.icon data-icon="inline-start" />
          <span>{item.title}</span>
        </Link>
      ))}
    </CardContent>
  );
}

export default SidebarNav;
