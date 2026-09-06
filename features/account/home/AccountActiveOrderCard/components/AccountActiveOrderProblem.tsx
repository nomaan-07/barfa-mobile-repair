import { MessageSquareWarning } from "lucide-react";
import AccountActiveOrderSectionTitle from "./AccountActiveOrderSectionTitle";

interface AccountActiveOrderProblemProps {
  problem: string;
}

function AccountActiveOrderProblem({
  problem,
}: AccountActiveOrderProblemProps) {
  return (
    <div className="space-y-2">
      <AccountActiveOrderSectionTitle
        title="مشکل دستگاه"
        icon={MessageSquareWarning}
      />

      <p className="bg-muted/50 text-muted-foreground rounded-xl p-3 leading-7">
        {problem}
      </p>
    </div>
  );
}

export default AccountActiveOrderProblem;
