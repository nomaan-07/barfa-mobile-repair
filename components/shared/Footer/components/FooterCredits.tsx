import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

function FooterCredits() {
  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(new Date());

  return (
    <Card className="bg-secondary text-sm">
      <CardContent className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span> © برفا موبایل {persianYear} — تمامی حقوق محفوظ است.</span>
        <div className="flex items-center gap-1">
          <span>ساخته‌شده با</span>
          <Heart className="fill-primary stroke-primary size-4" />
          <span> توسط نعمان</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default FooterCredits;
