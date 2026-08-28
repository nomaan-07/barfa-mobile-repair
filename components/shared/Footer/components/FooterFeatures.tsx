import IconBox from "@/components/ui/IconBox";
import {
  BadgeDollarSign,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const footerFeatures = [
  {
    id: "professional-repair",
    icon: Wrench,
    title: "تعمیر تخصصی",
  },
  {
    id: "accurate-diagnosis",
    icon: SearchCheck,
    title: "عیب‌یابی دقیق",
  },
  {
    id: "quality-parts",
    icon: ShieldCheck,
    title: "قطعات باکیفیت",
  },
  {
    id: "fair-pricing",
    icon: BadgeDollarSign,
    title: "قیمت منصفانه",
  },
];

function FooterFeatures() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {footerFeatures.map(({ id, title, icon }) => (
        <div key={id} className="flex flex-col items-center text-center">
          <IconBox icon={icon} />
          <p className="mt-5 text-sm font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default FooterFeatures;
