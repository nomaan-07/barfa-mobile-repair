import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  size?: "small" | "normal";
  color?: "primary" | "secondary";
}

function Logo({ size = "normal", color = "primary" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-lalezar select-none",
        color === "primary" && "text-primary",
        color === "secondary" && "text-white",
        size === "small" && "text-xl",
        size === "normal" && "text-2xl sm:text-3xl",
      )}
    >
      برفا موبایل
    </Link>
  );
}

export default Logo;
