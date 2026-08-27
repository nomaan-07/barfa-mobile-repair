import { cn } from "@/lib/utils";

interface SectionTitleLineProps {
  direction: "left" | "right";
}

function SectionTitleLine({ direction }: SectionTitleLineProps) {
  return (
    <div
      className={cn(
        "from-primary/20 h-px w-full to-transparent",
        direction === "left" ? "bg-linear-to-l" : "bg-linear-to-r",
      )}
    />
  );
}

export default SectionTitleLine;
