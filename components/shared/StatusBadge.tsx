import { orderStatuses } from "@/constants/orderStatuses";
import { OrderStatus } from "@/types/order";
import { Badge } from "../ui/badge";

interface StatusBadgeProps {
  status: OrderStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = orderStatuses[status];

  return <Badge className={className}>{label}</Badge>;
}

export default StatusBadge;
