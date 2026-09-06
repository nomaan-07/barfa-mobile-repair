import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  isCentered?: boolean;
  size?: "small" | "default";
}

function IconBox({ icon: Icon, isCentered, size = "default" }: IconBoxProps) {
  const isDefault = size === "default";

  return (
    <div
      className={cn(
        "bg-primary/10 dark:bg-primary/20 text-primary flex shrink-0 items-center justify-center rounded-xl",
        isCentered && "sm:mx-auto",
        isDefault ? "size-12" : "size-10",
      )}
    >
      <Icon className={isDefault ? "size-6" : "size-5"} strokeWidth={1.5} />
    </div>
  );
}

export default IconBox;
