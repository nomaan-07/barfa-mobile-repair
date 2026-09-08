import { MessageSquareWarning } from "lucide-react";
import AccountOrderSectionTitle from "./AccountOrderSectionTitle";

interface AccountOrderProblemProps {
  problem: string;
}

function AccountOrderProblem({ problem }: AccountOrderProblemProps) {
  return (
    <div className="space-y-2">
      <AccountOrderSectionTitle
        title="مشکل دستگاه"
        icon={MessageSquareWarning}
      />

      <p className="bg-muted darK:bg-muted/50 text-muted-foreground rounded-xl p-3 leading-7">
        {problem}
      </p>
    </div>
  );
}

export default AccountOrderProblem;
