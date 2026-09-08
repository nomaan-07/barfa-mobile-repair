import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  message: string;
  icon: LucideIcon;
}

function EmptyState({ message, icon: Icon }: EmptyStateProps) {
  return (
    <div className="mb-4 flex min-h-48 items-center justify-center rounded-xl border border-dashed">
      <div className="flex flex-col items-center gap-3">
        <Icon className="text-primary size-8" strokeWidth={1.5} />
        <span className="text-muted-foreground text-base sm:text-lg">
          {message}
        </span>
      </div>
    </div>
  );
}

export default EmptyState;
