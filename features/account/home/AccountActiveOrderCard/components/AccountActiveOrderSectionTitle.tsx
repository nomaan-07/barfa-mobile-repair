import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AccountActiveOrderSectionTitleProps {
  title: string;
  icon: LucideIcon;
  truncate?: boolean;
}

function AccountActiveOrderSectionTitle({
  title,
  truncate,
  icon: Icon,
}: AccountActiveOrderSectionTitleProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-semibold",
        truncate && "min-w-0",
      )}
    >
      <Icon className="text-muted-foreground size-4 shrink-0" />
      <span className={cn(truncate && "truncate")}>{title}</span>
    </div>
  );
}

export default AccountActiveOrderSectionTitle;
