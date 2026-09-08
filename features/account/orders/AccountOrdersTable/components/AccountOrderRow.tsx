import StatusBadge from "@/components/shared/StatusBadge";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@/types/order";
import AccountOrderDetails from "./AccountOrderDetails";

interface AccountOrderRowProps {
  orderCode: string;
  index: number;
  phoneBrand: string;
  phoneModel: string;
  problemTitle: string;
  problemDescription: string;
  createdAt: string;
  status: OrderStatus;
  paidAmount?: number;
  pickedUpAt?: string;
  isOpen: boolean;
  toggleOrder: (orderCode: string) => void;
}

function AccountOrderRow({
  orderCode,
  index,
  phoneBrand,
  phoneModel,
  problemTitle,
  problemDescription,
  createdAt,
  status,
  paidAmount,
  pickedUpAt,
  isOpen,
  toggleOrder,
}: AccountOrderRowProps) {
  return (
    <>
      <TableRow
        onClick={() => toggleOrder(orderCode)}
        className={cn(
          "hover:bg-muted/50 h-13 cursor-pointer",
          isOpen && "bg-muted/30",
        )}
      >
        <TableCell className="text-muted-foreground text-center">
          {(index + 1).toLocaleString("fa-IR")}
        </TableCell>

        <TableCell>
          <p className="font-mono">{orderCode}</p>
        </TableCell>

        <TableCell>
          <p>
            {phoneBrand} {phoneModel}
          </p>
        </TableCell>

        <TableCell>
          <StatusBadge status={status} />
        </TableCell>

        <TableCell>
          <p>{problemTitle}</p>
        </TableCell>
        <TableCell>
          <p>{createdAt}</p>
        </TableCell>
      </TableRow>

      {isOpen && (
        <AccountOrderDetails
          paidAmount={paidAmount}
          pickedUpAt={pickedUpAt}
          problemDescription={problemDescription}
        />
      )}
    </>
  );
}

export default AccountOrderRow;
