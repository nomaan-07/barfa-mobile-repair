import { OrderStatus } from "@/types/order";
import { Badge } from "../ui/badge";

const orderStatuses = {
  repairing: {
    label: "در حال تعمیر",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  },
  ready: {
    label: "آماده تحویل",
    className:
      "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300",
  },
  picked_up: {
    label: "تحویل شده",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  },
  canceled: {
    label: "لغو شده",
    className: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300",
  },
} as const;

interface StatusBadgeProps {
  status: OrderStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = orderStatuses[status];

  return <Badge className={className}>{label}</Badge>;
}

export default StatusBadge;
