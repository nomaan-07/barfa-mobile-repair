import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import { SidebarProfileProps } from "../types";

function SidebarProfile({ type }: SidebarProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-secondary flex size-10 items-center justify-center overflow-hidden rounded-full border border-rose-600 dark:border-rose-700">
        <User2 className="fill-primary/30 dark:fill-primary size-7 stroke-none" />
      </div>

      <div className={cn("text-xs", type === "admin" && "flex flex-col gap-1")}>
        {type === "admin" && <span>نعمان</span>}
        <span>09123412342</span>
      </div>
    </div>
  );
}

export default SidebarProfile;
