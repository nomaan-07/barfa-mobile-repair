import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AccountOrder } from "@/types/order";
import { useState } from "react";
import AccountOrderRow from "./components/AccountOrderRow";

interface AccountOrdersTableProps {
  orders: AccountOrder[];
}

function AccountOrdersTable({ orders }: AccountOrdersTableProps) {
  const [openOrderCode, setOpenOrderCode] = useState<string | null>(null);

  function toggleOrder(orderCode: string) {
    setOpenOrderCode((current) => (current === orderCode ? null : orderCode));
  }

  return (
    <>
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>کد سفارش</TableHead>
              <TableHead>دستگاه</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead>مشکل</TableHead>
              <TableHead>تاریخ پذیرش</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order, index) => {
              const isOpen = openOrderCode === order.orderCode;

              return (
                <AccountOrderRow
                  key={order.orderCode}
                  index={index}
                  isOpen={isOpen}
                  toggleOrder={toggleOrder}
                  {...order}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default AccountOrdersTable;
