import { TableCell, TableRow } from "@/components/ui/table";
import AccountOrderProblem from "@/features/account/components/AccountOrderProblem";
import { CalendarCheck, CircleDollarSign } from "lucide-react";
import AccountOrderDetailItem from "./AccountOrderDetailItem";

interface AccountOrderDetailsProps {
  problemDescription: string;
  pickedUpAt?: string;
  paidAmount?: number;
}

function AccountOrderDetails({
  problemDescription,
  pickedUpAt,
  paidAmount,
}: AccountOrderDetailsProps) {
  return (
    <TableRow className="bg-muted/20 hover:bg-muted/20">
      <TableCell colSpan={6} className="p-0">
        <div className="space-y-5 px-6 py-5">
          <AccountOrderProblem problem={problemDescription} />

          {pickedUpAt && (
            <AccountOrderDetailItem
              icon={CalendarCheck}
              label="تاریخ اتمام"
              value={pickedUpAt}
            />
          )}

          {paidAmount !== undefined && (
            <AccountOrderDetailItem
              icon={CircleDollarSign}
              label="هزینه نهایی"
              value={`${paidAmount.toLocaleString("fa-IR")} تومان`}
            />
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}

export default AccountOrderDetails;
