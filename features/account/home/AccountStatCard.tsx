import IconBox from "@/components/ui/IconBox";
import { LucideIcon } from "lucide-react";

interface AccountStatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

function AccountStatCard({ title, value, icon: Icon }: AccountStatCardProps) {
  return (
    <div className="bg-card flex items-center gap-4 py-2 sm:rounded-xl sm:border sm:p-4">
      <IconBox icon={Icon} size="small" />
      <div className="flex flex-col gap-3 text-sm font-semibold">
        <span className="text-muted-foreground">{title}</span>
        <span>{value.toLocaleString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default AccountStatCard;
