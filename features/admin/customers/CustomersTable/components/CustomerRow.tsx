import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, getRowNumber, toPersianDigits } from "@/lib/utils";
import CustomerActions from "./CustomerActions";

interface CustomerRowProps {
  index: number;
  currentPage: number;
  rowsPerPage: number;
  customerCode: string;
  gender: "male" | "female";
  name: string | null;
  phone: string | null;
  orderCount: number;
  lastOrderDate: string | null;
  totalPaidAmount: number;
}

function CustomerRow({
  index,
  currentPage,
  rowsPerPage,
  customerCode,
  gender,
  name,
  phone,
  orderCount,
  lastOrderDate,
  totalPaidAmount,
}: CustomerRowProps) {
  const displayGender = gender === "male" ? "آقای" : "خانم";
  const displayName = name
    ? `${displayGender} ${name}`
    : `${displayGender} بی‌نام`;

  return (
    <TableRow className="h-13">
      <TableCell className="text-muted-foreground text-center">
        {getRowNumber(currentPage, rowsPerPage, index).toLocaleString("fa-IR")}
      </TableCell>

      <TableCell>{displayName}</TableCell>

      <TableCell>{phone ? toPersianDigits(phone) : "-"}</TableCell>

      <TableCell>{orderCount.toLocaleString("fa-IR")}</TableCell>

      <TableCell>{lastOrderDate ? formatDate(lastOrderDate) : "-"}</TableCell>

      <TableCell>
        {totalPaidAmount > 0 ? (
          <span className="text-green-600">
            {totalPaidAmount.toLocaleString("fa-IR")} ت
          </span>
        ) : (
          "۰"
        )}
      </TableCell>

      <TableCell>
        <CustomerActions customerCode={customerCode} />
      </TableCell>
    </TableRow>
  );
}

export default CustomerRow;
