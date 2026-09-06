import StatusBadge from "@/components/shared/StatusBadge";
import { Smartphone } from "lucide-react";
import { ActiveOrderStatus } from "../types";
import AccountActiveOrderSectionTitle from "./AccountActiveOrderSectionTitle";

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
      <AccountActiveOrderSectionTitle
        title={model}
        icon={Smartphone}
        truncate
      />

      <StatusBadge status={status} />
    </div>
  );
}

export default AccountActiveOrderHeader;
