import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

function ThemeToggle() {
  return (
    <Button size="icon" variant="outline" className="md:cursor-pointer">
      <Moon />
    </Button>
  );
}

export default ThemeToggle;
