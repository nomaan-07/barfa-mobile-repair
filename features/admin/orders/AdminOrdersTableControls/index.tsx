"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FilterIcon, PlusIcon, XCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AdminOrderSearch from "./components/AdminOrderSearch";
import AdminOrdersTableFilter from "./components/AdminOrdersTableFilter";

function AdminOrdersTableControls() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => setIsFiltersOpen((prev) => !prev);

  return (
    <>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex gap-2 max-sm:order-2">
          <Button
            variant={isFiltersOpen ? "destructive" : "outline"}
            size="icon"
            onClick={toggleFilters}
          >
            {isFiltersOpen ? <XCircleIcon /> : <FilterIcon />}
          </Button>

          <AdminOrderSearch />
        </div>

        <Link
          href="/admin/order/new"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-fit self-end max-sm:order-1",
          )}
        >
          <PlusIcon data-icon="inline-start" /> افزودن سفارش
        </Link>
      </div>
      {isFiltersOpen && <AdminOrdersTableFilter />}
    </>
  );
}

export default AdminOrdersTableControls;
