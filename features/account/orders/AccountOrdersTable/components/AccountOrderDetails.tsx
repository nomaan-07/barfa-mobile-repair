import { TableCell, TableRow } from "@/components/ui/table";
import AccountOrderIssueDescription from "@/features/account/components/AccountOrderIssueDescription";
import { formatDate } from "@/lib/utils";
import { CalendarCheck, CircleDollarSign } from "lucide-react";
import AccountOrderDetailItem from "./AccountOrderDetailItem";

interface AccountOrderDetailsProps {
  issueDescription: string;
  returnedAt: string | null;
  paidAmount: number | null;
}

function AccountOrderDetails({
  issueDescription,
  returnedAt,
  paidAmount,
}: AccountOrderDetailsProps) {
  return (
    <TableRow className="bg-muted/20 hover:bg-muted/20">
      <TableCell colSpan={6} className="p-0">
        <div className="space-y-5 px-6 py-5">
          <AccountOrderIssueDescription issueDescription={issueDescription} />

          {returnedAt && (
            <AccountOrderDetailItem
              icon={CalendarCheck}
              label="تاریخ تحویل"
              value={formatDate(returnedAt)}
            />
          )}

          {paidAmount && (
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
