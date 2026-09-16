import { AccountActiveOrder } from "@/types/order";
import AccountOrderIssueDescription from "../../components/AccountOrderIssueDescription";
import AccountActiveOrderCode from "./components/AccountActiveOrderCode";
import AccountActiveOrderHeader from "./components/AccountActiveOrderHeader";

function AccountActiveOrderCard({
  phoneBrandFa,
  phoneModel,
  status,
  issueDescription,
  orderCode,
}: AccountActiveOrder) {
  return (
    <div className="space-y-5 py-2">
      <AccountActiveOrderHeader
        phoneBrandFa={phoneBrandFa}
        phoneModel={phoneModel}
        status={status}
      />
      <AccountOrderIssueDescription issueDescription={issueDescription} />
      <AccountActiveOrderCode orderCode={orderCode} />
    </div>
  );
}

export default AccountActiveOrderCard;
