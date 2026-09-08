import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp, Undo2 } from "lucide-react";
import { AccountTableFilterType, AccountTableSortType } from "./types";

const statusItems = [
  { label: "همه وضعیت‌ها", value: "all" },
  { label: "در حال تعمیر", value: "repairing" },
  { label: "آماده تحویل", value: "ready" },
  { label: "تحویل شده", value: "picked_up" },
  { label: "لغو شده", value: "canceled" },
];

const sortItems = [
  { label: "جدیدترین", value: "newest" },
  { label: "قدیمی‌ترین", value: "oldest" },
];

interface AccountOrdersTableControlsProps {
  statusFilter: AccountTableFilterType;
  sortOrder: AccountTableSortType;
  hasActiveControls: boolean;
  onStatusFilter: (value: AccountTableFilterType) => void;
  onSortOrder: (value: AccountTableSortType) => void;
  onReset: () => void;
}

function AccountOrdersTableControls({
  statusFilter,
  onStatusFilter,
  sortOrder,
  onSortOrder,
  hasActiveControls,
  onReset,
}: AccountOrdersTableControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select
        items={statusItems}
        value={statusFilter}
        onValueChange={(value) => {
          if (value) onStatusFilter(value);
        }}
      >
        <SelectTrigger className="w-44 cursor-pointer">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>فیلتر</SelectLabel>
            {statusItems.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="cursor-pointer"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        items={sortItems}
        value={sortOrder}
        onValueChange={(value) => {
          if (value) onSortOrder(value);
        }}
      >
        <SelectTrigger className="w-44 cursor-pointer">
          <ArrowDownUp className="size-4" />
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>دسته بندی</SelectLabel>

            {sortItems.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="cursor-pointer"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {hasActiveControls && (
        <Button
          className="cursor-pointer"
          variant="outline"
          aria-label="باز نشانی فیلترها و مرتب سازی"
          onClick={onReset}
        >
          <Undo2 data-icon="inline-start" /> پاک کردن
        </Button>
      )}
    </div>
  );
}

export default AccountOrdersTableControls;
