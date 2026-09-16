import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import OptionSelect from "@/components/shared/OptionSelect";
import { orderStatusFilterOptions } from "@/constants/orderStatuses";
import { dateSortOptions } from "@/constants/sorts";
import { StatusFilter } from "@/types/filter";
import { DateSort } from "@/types/sort";

interface AccountOrdersTableControlsProps {
  statusFilter: StatusFilter;
  dateSort: DateSort;
  hasActiveControls: boolean;
  onStatusFilter: (value: StatusFilter) => void;
  onDateSort: (value: DateSort) => void;
  onReset: () => void;
}

function AccountOrdersTableControls({
  statusFilter,
  onStatusFilter,
  dateSort,
  onDateSort,
  hasActiveControls,
  onReset,
}: AccountOrdersTableControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <OptionSelect
        options={orderStatusFilterOptions}
        value={statusFilter}
        label="وضعیت"
        onValueChange={onStatusFilter}
      />

      <OptionSelect
        options={dateSortOptions}
        value={dateSort}
        onValueChange={onDateSort}
      />

      {hasActiveControls && <ClearFiltersButton onReset={onReset} />}
    </div>
  );
}

export default AccountOrdersTableControls;
