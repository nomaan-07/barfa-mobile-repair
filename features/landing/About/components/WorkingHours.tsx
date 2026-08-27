import { Card, CardContent } from "@/components/ui/card";
import { Clock7 } from "lucide-react";
import AboutCardTitle from "./AboutCardTitle";
import WorkingHourRow from "./WorkingHourRow";

// TODO: Dynamic from backend
const workingHours = [
  { day: "شنبه تا پنجشنبه", hours: "۷ صبح تا ۷ شب" },
  { day: "جمعه", hours: "۲ بعد از ظهر تا ۷ شب" },
];

function WorkingHours() {
  return (
    <Card className="max-h-fit">
      <CardContent>
        <AboutCardTitle title="ساعات کاری" icon={Clock7} />
        <div className="mt-6 space-y-3">
          {workingHours.map((workingHour) => (
            <WorkingHourRow key={workingHour.day} {...workingHour} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkingHours;
