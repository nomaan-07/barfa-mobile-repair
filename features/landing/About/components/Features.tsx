import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, CheckCircle2, Clock3, Search, Wrench } from "lucide-react";
import AboutCardTitle from "./AboutCardTitle";
import Feature from "./Feature";

const features = [
  {
    icon: Search,
    title: "عیب‌یابی دقیق",
    description: "مشکل دستگاه قبل از شروع تعمیر، با دقت بررسی می‌شود.",
  },
  {
    icon: Wrench,
    title: "تعمیر اصولی",
    description: "تعمیرات با ابزار مناسب و دقت بالا انجام می‌شود.",
  },
  {
    icon: Clock3,
    title: "تحویل به‌موقع",
    description: "تلاش می‌کنیم دستگاه شما در سریع‌ترین زمان آماده شود.",
  },
  {
    icon: CheckCircle2,
    title: "تست قبل از تحویل",
    description: "دستگاه پس از تعمیر به‌طور کامل بررسی و تست می‌شود.",
  },
];

function Features() {
  return (
    <Card className="max-h-fit">
      <CardContent>
        <AboutCardTitle title="چرا برفا؟" icon={BadgeCheck} />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Features;
