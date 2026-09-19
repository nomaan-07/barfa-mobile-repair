import { Undo2Icon } from "lucide-react";
import { Button } from "../ui/button";

interface ClearFiltersButtonProps {
  onReset: () => void;
}

function ClearFiltersButton({ onReset }: ClearFiltersButtonProps) {
  return (
    <Button
      variant="outline"
      aria-label="باز نشانی فیلترها و مرتب‌سازی"
      onClick={onReset}
      className="w-fit"
    >
      <Undo2Icon data-icon="inline-start" /> بازنشانی
    </Button>
  );
}

export default ClearFiltersButton;
