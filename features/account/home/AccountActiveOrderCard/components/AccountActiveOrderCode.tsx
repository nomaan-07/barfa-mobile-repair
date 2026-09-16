import AccountOrderSectionTitle from "@/features/account/components/AccountOrderSectionTitle";
import { Hash } from "lucide-react";

interface AccountActiveOrderCodeProps {
  orderCode: string;
}

function AccountActiveOrderCode({ orderCode }: AccountActiveOrderCodeProps) {
  return (
    <div className="flex items-center gap-2">
      <AccountOrderSectionTitle title="کد سفارش:" icon={Hash} />
      <span className="text-muted-foreground font-mono">{orderCode}</span>
    </div>
  );
}

export default AccountActiveOrderCode;
