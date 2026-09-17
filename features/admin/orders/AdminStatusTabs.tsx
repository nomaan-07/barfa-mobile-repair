"use client";

import { Button } from "@/components/ui/button";
import { orderStatuses } from "@/constants/orderStatuses";
import { cn } from "@/lib/utils";
import { StatusFilter } from "@/types/filter";
import { OrderStatus } from "@/types/order";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const allFilter = {
  label: "همه",
  className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

function AdminStatusTabs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const status = searchParams.get("status") ?? "all";

  const filters = [
    { value: "all" as const, ...allFilter },
    ...(
      Object.entries(orderStatuses) as [
        OrderStatus,
        (typeof orderStatuses)[OrderStatus],
      ][]
    ).map(([key, config]) => ({ value: key, ...config })),
  ];

  function updateStatus(value: StatusFilter) {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = status === filter.value;
        return (
          <Button
            key={filter.value}
            variant="outline"
            onClick={() => updateStatus(filter.value)}
            className={cn(
              isActive && [
                "pointer-events-none border-transparent!",
                filter.className,
              ],
            )}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}

export default AdminStatusTabs;
