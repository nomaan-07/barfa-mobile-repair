import AccountOrderSectionTitle from "@/features/account/components/AccountOrderSectionTitle";
import { Hash } from "lucide-react";

interface AccountActiveOrderCodeProps {
  code: string;
}

function AccountActiveOrderCode({ code }: AccountActiveOrderCodeProps) {
  return (
    <div className="flex items-center gap-2">
      <AccountOrderSectionTitle title="کد سفارش:" icon={Hash} />
      <span className="text-muted-foreground font-mono">{code}</span>
    </div>
  );
}

export default AccountActiveOrderCode;
