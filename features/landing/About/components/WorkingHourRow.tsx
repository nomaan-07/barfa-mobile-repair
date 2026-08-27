interface WorkingHourRowProps {
  day: string;
  hours: string;
}

function WorkingHourRow({ day, hours }: WorkingHourRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b pb-3 text-sm last:border-0 last:pb-0">
      <span className="font-medium">{day}</span>

      <span className="text-muted-foreground">{hours}</span>
    </div>
  );
}

export default WorkingHourRow;
