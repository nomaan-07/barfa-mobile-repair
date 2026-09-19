"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import OptionSelect from "@/components/shared/OptionSelect";
import { Field, FieldLabel } from "@/components/ui/field";
import { dateSortOptions } from "@/constants/sorts";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";

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
  const updateSearchParams = useUpdateSearchParams();

  const device = searchParams.get("device") ?? "all";
  const payment = searchParams.get("payment") ?? "all";
  const sort = searchParams.get("sort") ?? "newest";

  const hasActiveFilters =
    device !== "all" || payment !== "all" || sort !== "newest";

  function updateFilter(key: "device" | "payment" | "sort", value: string) {
    updateSearchParams({
      [key]:
        value === "all" || (key === "sort" && value === "newest")
          ? null
          : value,
      page: 1,
    });
  }

  function resetFilters() {
    updateSearchParams({
      device: null,
      payment: null,
      sort: null,
      page: null,
    });
  }

  return (
    <div className="relative flex flex-wrap items-end gap-4 rounded-xl border p-2">
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
        <FieldLabel>مرتب‌سازی</FieldLabel>
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
