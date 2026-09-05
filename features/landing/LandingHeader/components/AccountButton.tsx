import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn, User } from "lucide-react";
import Link from "next/link";

const accountHref = {
  "logged-out": "/login",
  user: "/account",
  admin: "/admin",
} as const;

function AccountButton() {
  // TODO: Replace with supabase user state (logged-out, user, admin).
  const state: "user" | "admin" | "logged-out" = "logged-out";

  const isLoggedOut = state === "logged-out";

  return (
    <Link
      className={cn(
        buttonVariants({
          variant: "outline",
          size: isLoggedOut ? "default" : "icon",
        }),
        "cursor-pointer",
        isLoggedOut && "max-md:size-8 max-md:p-0!",
      )}
      href={accountHref[state]}
      aria-label={isLoggedOut ? "ورود به حساب کاربری" : "حساب کاربری"}
    >
      {isLoggedOut ? <LogIn data-icon="inline-start" /> : <User />}
      {isLoggedOut && (
        <span className="hidden md:inline">ورود به حساب کاربری</span>
      )}
    </Link>
  );
}

export default AccountButton;
