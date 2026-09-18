"use client";

import OptionSelect from "@/components/shared/OptionSelect";
import { dateSortOptions } from "@/constants/sorts";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";

const sortOptions = [
  ...dateSortOptions,
  {
    label: "بیشترین پرداختی",
    value: "most-paid",
  },
  {
    label: "کمترین پرداختی",
    value: "least-paid",
  },
];

function CustomersTableSort() {
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

  const sort = searchParams.get("sort") ?? "newest";

  function updateSort(value: string) {
    updateSearchParams({
      sort: value,
      page: 1,
    });
  }

  return (
    <div className="*:w-full sm:w-44">
      <OptionSelect
        options={sortOptions}
        value={sort}
        onValueChange={updateSort}
        label="مرتب‌سازی"
      />
    </div>
  );
}

export default CustomersTableSort;
