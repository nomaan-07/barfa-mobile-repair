import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  isCentered?: boolean;
}

function IconBox({ icon: Icon, isCentered }: IconBoxProps) {
  return (
    <div
      className={cn(
        "bg-primary/10 dark:bg-primary/20 text-primary flex size-12 shrink-0 items-center justify-center rounded-xl",
        isCentered && "sm:mx-auto",
      )}
    >
      <Icon className="size-6" strokeWidth={1.5} />
    </div>
  );
}

export default IconBox;
