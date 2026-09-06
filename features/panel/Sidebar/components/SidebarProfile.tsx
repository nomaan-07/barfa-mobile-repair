import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import { SidebarProfileProps } from "../types";

function SidebarProfile({ type }: SidebarProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-secondary border-secondary-600 flex size-10 items-center justify-center overflow-hidden rounded-full border">
        <User2 className="dark:fill-muted-foreground size-7 fill-gray-300 stroke-none" />
      </div>

      <div className={cn("text-xs", type === "admin" && "flex flex-col gap-1")}>
        {type === "admin" && <span>نعمان</span>}
        <span>09123412342</span>
      </div>
    </div>
  );
}

export default SidebarProfile;
