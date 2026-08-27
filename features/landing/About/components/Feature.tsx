import IconBox from "@/components/ui/IconBox";
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div key={title} className="flex gap-4">
      <IconBox icon={icon} />

      <div>
        <h4 className="mb-2 font-semibold">{title}</h4>

        <p className="text-muted-foreground min-h-10 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Feature;
