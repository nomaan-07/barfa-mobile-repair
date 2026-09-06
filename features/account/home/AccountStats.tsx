import { CheckCircle, ClipboardList, PackageCheck, Wrench } from "lucide-react";
import AccountStatCard from "./AccountStatCard";

// FIXME: get data from server
const accountStats = [
  {
    id: "orders",
    title: "سفارش‌های من",
    value: 5,
    icon: ClipboardList,
  },
  {
    id: "active-repairs",
    title: "تعمیرات فعال",
    value: 1,
    icon: Wrench,
  },
  {
    id: "ready-repairs",
    title: "آماده تحویل",
    value: 1,
    icon: PackageCheck,
  },
  {
    id: "completed-repairs",
    title: "تعمیرات انجام‌شده",
    value: 3,
    icon: CheckCircle,
  },
];

function AccountStats() {
  return (
    <section className="grid max-sm:divide-y max-sm:rounded-xl max-sm:border max-sm:px-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {accountStats.map(({ id, ...stat }) => (
        <AccountStatCard key={id} {...stat} />
      ))}
    </section>
  );
}

export default AccountStats;
