import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminOrder } from "@/types/order";
import AdminOrderRow from "./components/AdminOrderRow";

interface AdminOrdersTableProps {
  currentPage: number;
  rowsPerPage: number;
}

// TODO: get from db
const fakeOrders: AdminOrder[] = [
  {
    orderCode: "sa-a14-27",
    phoneBrandFa: "سامسونگ",
    phoneModel: "A14",
    status: "repairing",
    issueTitle: "شارژ کند",
    receivedAt: "2025-09-05",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "ip-13p-26",
    phoneBrandFa: "آیفون",
    phoneModel: "13 Pro",
    status: "ready",
    issueTitle: "روشن نشدن",
    receivedAt: "2025-09-03",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "xi-rn12-25",
    phoneBrandFa: "شیائومی",
    phoneModel: "Redmi Note 12",
    status: "picked_up",
    issueTitle: "تعویض باتری",
    receivedAt: "2025-08-28",
    returnedAt: "2025-08-30",
    paidAmount: 1800000,
    customerPhone: null,
  },
  {
    orderCode: "sa-s21-24",
    phoneBrandFa: "سامسونگ",
    phoneModel: "S21",
    status: "canceled",
    issueTitle: "خرابی صفحه نمایش",
    receivedAt: "2025-08-25",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "ip-11-23",
    phoneBrandFa: "آیفون",
    phoneModel: "11",
    status: "repairing",
    issueTitle: "مشکل آنتن‌دهی",
    receivedAt: "2025-09-04",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "hu-nova9-22",
    phoneBrandFa: "هواوی",
    phoneModel: "Nova 9",
    status: "ready",
    issueTitle: "مشکل شارژ",
    receivedAt: "2025-09-01",
    returnedAt: null,
    paidAmount: null,
    customerPhone: null,
  },
  {
    orderCode: "xi-poco-21",
    phoneBrandFa: "شیائومی",
    phoneModel: "Poco X3",
    status: "picked_up",
    issueTitle: "خرابی سوکت شارژ",
    receivedAt: "2025-08-20",
    returnedAt: "2025-08-22",
    paidAmount: 1500000,
    customerPhone: null,
  },
  {
    orderCode: "sa-a52-20",
    phoneBrandFa: "سامسونگ",
    phoneModel: "A52",
    status: "canceled",
    issueTitle: "آب‌خوردگی",
    receivedAt: "2025-08-18",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "ip-12-19",
    phoneBrandFa: "آیفون",
    phoneModel: "12",
    status: "repairing",
    issueTitle: "خرابی دوربین",
    receivedAt: "2025-09-06",
    returnedAt: null,
    paidAmount: null,
    customerPhone: null,
  },
  {
    orderCode: "sa-s22-18",
    phoneBrandFa: "سامسونگ",
    phoneModel: "S22",
    status: "ready",
    issueTitle: "ضعف باتری",
    receivedAt: "2025-09-02",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
  {
    orderCode: "xi-11t-17",
    phoneBrandFa: "شیائومی",
    phoneModel: "11T",
    status: "picked_up",
    issueTitle: "روشن نشدن",
    receivedAt: "2025-08-15",
    returnedAt: "2025-08-18",
    paidAmount: 3500000,
    customerPhone: "09123411233",
  },
  {
    orderCode: "ip-xr-16",
    phoneBrandFa: "آیفون",
    phoneModel: "XR",
    status: "canceled",
    issueTitle: "مشکل تصویر",
    receivedAt: "2025-08-12",
    returnedAt: null,
    paidAmount: null,
    customerPhone: "09123411233",
  },
];

function AdminOrdersTable({ currentPage, rowsPerPage }: AdminOrdersTableProps) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>کد سفارش</TableHead>
            <TableHead>دستگاه</TableHead>
            <TableHead>وضعیت</TableHead>
            <TableHead>شماره موبایل</TableHead>
            <TableHead>مشکل</TableHead>
            <TableHead>تاریخ پذیرش</TableHead>
            <TableHead>تاریخ تحویل</TableHead>
            <TableHead>مبلغ پرداختی</TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {fakeOrders.map((order, index) => (
            <AdminOrderRow
              key={order.orderCode}
              index={index}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              {...order}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminOrdersTable;
