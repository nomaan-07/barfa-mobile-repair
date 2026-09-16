import StatusBadge from "@/components/shared/StatusBadge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, toPersianDigits } from "@/lib/utils";
import { AdminOrder } from "@/types/order";
import AdminOrderActions from "./AdminOrderActions";

type AdminOrderRowProps = AdminOrder & {
  index: number;
};

function AdminOrderRow({
  index,
  orderCode,
  phoneBrandFa,
  phoneModel,
  status,
  customerPhone,
  issueTitle,
  receivedAt,
  returnedAt,
  paidAmount,
}: AdminOrderRowProps) {
  return (
    <TableRow className="h-13">
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
        {customerPhone ? <p>{toPersianDigits(customerPhone)}</p> : "-"}
      </TableCell>

      <TableCell>
        <p>{issueTitle}</p>
      </TableCell>

      <TableCell>
        <p>{formatDate(receivedAt)}</p>
      </TableCell>

      <TableCell>
        {returnedAt ? <p>{formatDate(returnedAt)}</p> : "-"}
      </TableCell>

      <TableCell>
        {paidAmount ? (
          <p className="text-green-600">
            {paidAmount.toLocaleString("fa-IR")} ت
          </p>
        ) : (
          "-"
        )}
      </TableCell>

      <TableCell>
        <AdminOrderActions orderCode={orderCode} />
      </TableCell>
    </TableRow>
  );
}

export default AdminOrderRow;
