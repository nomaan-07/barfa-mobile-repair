import AccountOrderProblem from "../../components/AccountOrderProblem";
import AccountActiveOrderCode from "./components/AccountActiveOrderCode";
import AccountActiveOrderHeader from "./components/AccountActiveOrderHeader";
import { ActiveOrderStatus } from "./types";

interface AccountActiveOrderCardProps {
  model: string;
  status: ActiveOrderStatus;
  problem: string;
  orderCode: string;
}

function AccountActiveOrderCard({
  model,
  status,
  problem,
  orderCode,
}: AccountActiveOrderCardProps) {
  return (
    <div className="space-y-5 py-2">
      <AccountActiveOrderHeader model={model} status={status} />
      <AccountOrderProblem problem={problem} />
      <AccountActiveOrderCode code={orderCode} />
    </div>
  );
}

export default AccountActiveOrderCard;
