import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="sm:text-center">
      <CardContent className="flex gap-4 sm:block">
        <div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-xl sm:mx-auto sm:mb-5">
          <Icon className="size-6" strokeWidth={1.5} />
        </div>

        <div>
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
