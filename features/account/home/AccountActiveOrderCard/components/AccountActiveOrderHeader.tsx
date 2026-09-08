import StatusBadge from "@/components/shared/StatusBadge";
import AccountOrderSectionTitle from "@/features/account/components/AccountOrderSectionTitle";
import { Smartphone } from "lucide-react";
import { ActiveOrderStatus } from "../types";

interface AccountActiveOrderHeaderProps {
  model: string;
  status: ActiveOrderStatus;
}

function AccountActiveOrderHeader({
  model,
  status,
}: AccountActiveOrderHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <AccountOrderSectionTitle title={model} icon={Smartphone} truncate />
      <StatusBadge status={status} />
    </div>
  );
}

export default AccountActiveOrderHeader;
