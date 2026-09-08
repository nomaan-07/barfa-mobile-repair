import { LucideIcon } from "lucide-react";
import AccountOrderSectionTitle from "../../../components/AccountOrderSectionTitle";

interface AccountOrderDetailItemProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

function AccountOrderDetailItem({
  label,
  value,
  icon,
}: AccountOrderDetailItemProps) {
  return (
    <div className="flex items-center gap-2">
      <AccountOrderSectionTitle title={`${label}:`} icon={icon} />
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
}

export default AccountOrderDetailItem;
