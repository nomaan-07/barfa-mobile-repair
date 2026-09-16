"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import OptionSelect from "@/components/shared/OptionSelect";
import { Field, FieldLabel } from "@/components/ui/field";
import { dateSortOptions } from "@/constants/sorts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export type StatusFilter = OrderStatus | "all";

// TODO: Move to website settings when device brands become configurable.
const deviceFilterOptions = [
  { label: "همه دستگاه‌ها", value: "all" },
  { label: "سامسونگ", value: "samsung" },
  { label: "شیائومی", value: "xiaomi" },
  { label: "آیفون", value: "iphone" },
  { label: "هواوی", value: "huawei" },
  { label: "گوگل", value: "google" },
  { label: "نوکیا", value: "nokia" },
];

const paymentFilterOptions = [
  { label: "همه", value: "all" },
  { label: "پرداخت شده", value: "paid" },
  { label: "پرداخت نشده", value: "unpaid" },
];

const fieldClasses = "sm:w-44";

function AdminOrdersTableFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const device = searchParams.get("device") ?? "all";
  const payment = searchParams.get("payment") ?? "all";
  const sort = searchParams.get("sort") ?? "newest";

  const hasActiveFilters =
    device !== "all" || payment !== "all" || sort !== "newest";

  function updateFilter(key: "device" | "payment" | "sort", value: string) {
    const params = new URLSearchParams(searchParams);

    if ((key === "device" || key === "payment") && value === "all") {
      params.delete(key);
    } else if (key === "sort" && value === "newest") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function resetFilters() {
    const params = new URLSearchParams(searchParams);

    params.delete("device");
    params.delete("payment");
    params.delete("sort");
    params.delete("page");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="relative flex flex-wrap items-end gap-6 rounded-xl border p-2">
      <div className="bg-border absolute -top-6.5 right-3.5 h-6.5 w-px" />
      <Field className={fieldClasses}>
        <FieldLabel>دستگاه</FieldLabel>
        <OptionSelect
          options={deviceFilterOptions}
          value={device}
          onValueChange={(value) => updateFilter("device", value)}
        />
      </Field>
      <Field className={fieldClasses}>
        <FieldLabel>وضعیت پرداخت</FieldLabel>
        <OptionSelect
          options={paymentFilterOptions}
          value={payment}
          onValueChange={(value) => updateFilter("payment", value)}
        />
      </Field>
      <Field className={fieldClasses}>
        <FieldLabel>مرتب سازی</FieldLabel>
        <OptionSelect
          options={dateSortOptions}
          value={sort}
          onValueChange={(value) => updateFilter("sort", value)}
        />
      </Field>
      {hasActiveFilters && <ClearFiltersButton onReset={resetFilters} />}
    </div>
  );
}

export default AdminOrdersTableFilter;
