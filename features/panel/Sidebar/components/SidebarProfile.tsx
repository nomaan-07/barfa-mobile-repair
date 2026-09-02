import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import { SidebarProfileProps } from "../types";

function SidebarProfile({ type }: SidebarProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary/20 flex size-10 items-center justify-center rounded-full">
        <User2 className="fill-primary/30 size-7 stroke-none" />
      </div>

      <div
        className={cn(
          "text-muted-foreground text-xs",
          type === "admin" && "flex flex-col gap-1",
        )}
      >
        {type === "admin" && <span className="font-bold">نعمان</span>}
        <span className="">09123412342</span>
      </div>
    </div>
  );
}

export default SidebarProfile;
