import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function HeroLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* TODO: get dynamic link from server (/login or /account/progress) */}
      <Link
        className={buttonVariants({ variant: "default", size: "lg" })}
        href="/login"
      >
        پیگیری سفارش
      </Link>

      <Link
        className={buttonVariants({ variant: "secondary", size: "lg" })}
        href="#services"
      >
        مشاهده خدمات
      </Link>
    </div>
  );
}

export default HeroLinks;
