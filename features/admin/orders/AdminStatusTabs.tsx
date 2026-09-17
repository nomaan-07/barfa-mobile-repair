"use client";

import { Button } from "@/components/ui/button";
import { orderStatuses } from "@/constants/orderStatuses";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { cn } from "@/lib/utils";
import { StatusFilter } from "@/types/filter";
import { OrderStatus } from "@/types/order";
import { useSearchParams } from "next/navigation";

const allFilter = {
  label: "همه",
  className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

function AdminStatusTabs() {
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

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
    updateSearchParams({
      status: value === "all" ? null : value,
      page: 1,
    });
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
