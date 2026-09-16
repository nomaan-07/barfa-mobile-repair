"use client";

import { Button } from "@/components/ui/button";
import { orderStatuses } from "@/constants/orderStatuses";
import { cn } from "@/lib/utils";
import { StatusFilter } from "@/types/filter";
import { OrderStatus } from "@/types/order";
import { useState } from "react";

const allFilter = {
  label: "همه",
  className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

function AdminStatusTabs() {
  // Set Filter to url
  const [status, setStatus] = useState<StatusFilter>("all");

  const filters = [
    { value: "all" as const, ...allFilter },
    ...(
      Object.entries(orderStatuses) as [
        OrderStatus,
        (typeof orderStatuses)[OrderStatus],
      ][]
    ).map(([key, config]) => ({ value: key, ...config })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = status === filter.value;
        return (
          <Button
            key={filter.value}
            variant="outline"
            // FIXME: make the size sm if design allowed
            // size="sm"
            onClick={() => setStatus(filter.value)}
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
