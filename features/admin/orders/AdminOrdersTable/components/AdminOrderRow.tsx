import StatusBadge from "@/components/shared/StatusBadge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, getRowNumber, toPersianDigits } from "@/lib/utils";
import { AdminOrder } from "@/types/order";
import AdminOrderActions from "./AdminOrderActions";

type AdminOrderRowProps = AdminOrder & {
  index: number;
  currentPage: number;
  rowsPerPage: number;
};

function AdminOrderRow({
  index,
  currentPage,
  rowsPerPage,
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
        {getRowNumber(currentPage, rowsPerPage, index).toLocaleString("fa-IR")}
      </TableCell>

      <TableCell className="font-mono">{orderCode}</TableCell>

      <TableCell>
        {phoneBrandFa} {phoneModel}
      </TableCell>

      <TableCell>
        <StatusBadge status={status} />
      </TableCell>

      <TableCell>
        {customerPhone ? toPersianDigits(customerPhone) : "-"}
      </TableCell>

      <TableCell>{issueTitle}</TableCell>

      <TableCell>{formatDate(receivedAt)}</TableCell>

      <TableCell>{returnedAt ? formatDate(returnedAt) : "-"}</TableCell>

      <TableCell>
        {paidAmount ? (
          <span className="text-green-600">
            {paidAmount.toLocaleString("fa-IR")} ت
          </span>
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
