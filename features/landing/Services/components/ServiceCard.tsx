import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import IconBox from "@/components/ui/IconBox";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="sm:text-center">
      <CardContent className="flex gap-4 sm:block">
        <IconBox icon={icon} isCentered />
        <div>
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
