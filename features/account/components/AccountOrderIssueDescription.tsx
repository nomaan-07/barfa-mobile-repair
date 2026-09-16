import { MessageSquareWarning } from "lucide-react";
import AccountOrderSectionTitle from "./AccountOrderSectionTitle";

interface AccountOrderIssueDescriptionProps {
  issueDescription: string;
}

function AccountOrderIssueDescription({
  issueDescription,
}: AccountOrderIssueDescriptionProps) {
  return (
    <div className="space-y-2">
      <AccountOrderSectionTitle
        title="مشکل دستگاه"
        icon={MessageSquareWarning}
      />

      <p className="bg-muted darK:bg-muted/50 text-muted-foreground rounded-xl p-3 leading-7">
        {issueDescription}
      </p>
    </div>
  );
}

export default AccountOrderIssueDescription;
