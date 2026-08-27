import { LucideIcon } from "lucide-react";

interface AboutCardTitleProps {
  title: string;
  icon: LucideIcon;
}

function AboutCardTitle({ title, icon: Icon }: AboutCardTitleProps) {
  return (
    <div className="text-primary flex items-center gap-2">
      <Icon />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default AboutCardTitle;
