import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomerRow from "./components/CustomerRow";

interface CustomersTableProps {
  currentPage: number;
  rowsPerPage: number;
}

// TODO: get from db
const fakeCustomers = [
  {
    customerCode: "A7K2M9Q4",
    gender: "male",
    name: "علی رضایی",
    phone: "09123456789",
    orderCount: 1,
    lastOrderDate: "2026/3/10",
    totalPaidAmount: 0,
  },
  {
    customerCode: "B3P8X1N6",
    gender: "female",
    name: "مریم احمدی",
    phone: null,
    orderCount: 3,
    lastOrderDate: "2026/8/27",
    totalPaidAmount: 9200000,
  },
  {
    customerCode: "C9R4L7T2",
    gender: "male",
    name: "کریمی",
    phone: "09193456789",
    orderCount: 0,
    lastOrderDate: null,
    totalPaidAmount: 0,
  },
  {
    customerCode: "D5W1K8M3",
    gender: "female",
    name: "رضایی",
    phone: "09901234567",
    orderCount: 1,
    lastOrderDate: "2026/5/9",
    totalPaidAmount: 4500000,
  },
  {
    customerCode: "E2N6Q4P9",
    gender: "male",
    name: "امیرحسین مرادی",
    phone: null,
    orderCount: 6,
    lastOrderDate: "2026/9/1",
    totalPaidAmount: 24100000,
  },
  {
    customerCode: "F8L3T7R1",
    gender: "female",
    name: null,
    phone: "09367890123",
    orderCount: 2,
    lastOrderDate: "2026/1/17",
    totalPaidAmount: 7800000,
  },
  {
    customerCode: "G4M9X2K7",
    gender: "male",
    name: "موسوی",
    phone: "09129876543",
    orderCount: 4,
    lastOrderDate: "2026/4/19",
    totalPaidAmount: 15300000,
  },
  {
    customerCode: "H6P1R8N5",
    gender: "female",
    name: "سارا حسینی",
    phone: "09214567890",
    orderCount: 7,
    lastOrderDate: "2026/3/8",
    totalPaidAmount: 28600000,
  },
  {
    customerCode: "J9Q5W3L8",
    gender: "male",
    name: null,
    phone: null,
    orderCount: 2,
    lastOrderDate: "2026/8/25",
    totalPaidAmount: 6100000,
  },
  {
    customerCode: "K2T7M4C9",
    gender: "female",
    name: "نگار رحیمی",
    phone: "09394561234",
    orderCount: 9,
    lastOrderDate: "2026/7/24",
    totalPaidAmount: 41200000,
  },
  {
    customerCode: "L5N8P2R6",
    gender: "male",
    name: "کاظمی",
    phone: null,
    orderCount: 4,
    lastOrderDate: "2026/3/5",
    totalPaidAmount: 12800000,
  },
  {
    customerCode: "M3X7Q9K1",
    gender: "female",
    name: null,
    phone: "09361239876",
    orderCount: 6,
    lastOrderDate: "2026/4/1",
    totalPaidAmount: 21900000,
  },
] as const;

function CustomersTable({ currentPage, rowsPerPage }: CustomersTableProps) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>نام</TableHead>
            <TableHead>شماره موبایل</TableHead>
            <TableHead>تعداد سفارش‌ها</TableHead>
            <TableHead>آخرین سفارش</TableHead>
            <TableHead>مجموع پرداختی</TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {fakeCustomers.map((customer, index) => (
            <CustomerRow
              key={customer.customerCode}
              index={index}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              {...customer}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomersTable;
