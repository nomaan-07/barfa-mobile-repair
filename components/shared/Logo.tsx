import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  size?: "small" | "default";
}

function Logo({ size = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-lalezar text-primary select-none",
        size === "default" ? "text-2xl sm:text-3xl" : "text-xl",
      )}
    >
      برفا موبایل
    </Link>
  );
}

export default Logo;
