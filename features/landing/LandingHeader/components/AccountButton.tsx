import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClipboardCheck, LayoutDashboard, LogIn } from "lucide-react";
import Link from "next/link";

const accountButtonConfig = {
  "logged-out": {
    href: "/login",
    label: "ورود به حساب کاربری",
    icon: LogIn,
    buttonVariant: "outline",
  },
  user: {
    href: "/account/progress",
    label: "پیگیری سفارش",
    icon: ClipboardCheck,
    buttonVariant: "destructive",
  },
  admin: {
    href: "/admin",
    label: "پنل مدیریت",
    icon: LayoutDashboard,
    buttonVariant: "default",
  },
} as const;

function AccountButton() {
  // TODO: Replace with supabase user state (logged-out, user, admin).
  const state = "logged-out";

  const { href, label, buttonVariant, icon: Icon } = accountButtonConfig[state];
  return (
    <Link
      className={cn(
        buttonVariants({ variant: buttonVariant }),
        state === "logged-out" && "md:hover:bg-secondary hover:bg-transparent",
      )}
      href={href}
    >
      <Icon data-icon="inline-start" /> {label}
    </Link>
  );
}

export default AccountButton;
