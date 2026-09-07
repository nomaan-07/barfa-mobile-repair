import { WrenchOff } from "lucide-react";

function NoActiveOrders() {
  return (
    <div className="mb-4 flex min-h-48 items-center justify-center rounded-xl border border-dashed">
      <div className="flex flex-col items-center gap-3">
        <WrenchOff className="text-primary size-8" strokeWidth={1.5} />
        <span className="text-muted-foreground text-base sm:text-lg">
          سفارش فعالی ندارید
        </span>
      </div>
    </div>
  );
}

export default NoActiveOrders;
