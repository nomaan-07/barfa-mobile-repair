import StatusBadge from "@/components/shared/StatusBadge";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn, formatDate } from "@/lib/utils";
import { AccountOrder } from "@/types/order";
import AccountOrderDetails from "./AccountOrderDetails";

type AccountOrderRowProps = AccountOrder & {
  index: number;
  isOpen: boolean;
  toggleOrder: (orderCode: string) => void;
};

function AccountOrderRow({
  orderCode,
  index,
  phoneBrandFa,
  phoneModel,
  issueTitle,
  issueDescription,
  receivedAt,
  paidAmount,
  status,
  returnedAt,
  isOpen,
  toggleOrder,
}: AccountOrderRowProps) {
  return (
    <>
      <TableRow
        onClick={() => toggleOrder(orderCode)}
        className={cn("h-13 cursor-pointer", isOpen && "bg-muted/30")}
      >
        <TableCell className="text-muted-foreground text-center">
          {(index + 1).toLocaleString("fa-IR")}
        </TableCell>

        <TableCell>
          <p className="font-mono">{orderCode}</p>
        </TableCell>

        <TableCell>
          <p>
            {phoneBrandFa} {phoneModel}
          </p>
        </TableCell>

        <TableCell>
          <StatusBadge status={status} />
        </TableCell>

        <TableCell>
          <p>{issueTitle}</p>
        </TableCell>

        <TableCell>
          <p>{formatDate(receivedAt)}</p>
        </TableCell>
      </TableRow>

      {isOpen && (
        <AccountOrderDetails
          paidAmount={paidAmount}
          returnedAt={returnedAt}
          issueDescription={issueDescription}
        />
      )}
    </>
  );
}

export default AccountOrderRow;
