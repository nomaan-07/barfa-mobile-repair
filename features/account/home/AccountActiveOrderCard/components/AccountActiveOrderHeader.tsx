import StatusBadge from "@/components/shared/StatusBadge";
import AccountOrderSectionTitle from "@/features/account/components/AccountOrderSectionTitle";
import { ActiveOrderStatus } from "@/types/order";
import { Smartphone } from "lucide-react";

interface AccountActiveOrderHeaderProps {
  phoneBrandFa: string;
  phoneModel: string;
  status: ActiveOrderStatus;
}

function AccountActiveOrderHeader({
  phoneBrandFa,
  phoneModel,
  status,
}: AccountActiveOrderHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <AccountOrderSectionTitle
        title={`${phoneBrandFa} ${phoneModel}`}
        icon={Smartphone}
        truncate
      />
      <StatusBadge status={status} />
    </div>
  );
}

export default AccountActiveOrderHeader;
