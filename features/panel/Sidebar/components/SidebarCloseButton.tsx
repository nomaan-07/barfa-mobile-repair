import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

function SidebarCloseButton() {
  return (
    <Button
      size="icon"
      className="md:hidden"
      // FIXME: Actual Function
      onClick={() => {}}
    >
      <X className="size-5" />
    </Button>
  );
}

export default SidebarCloseButton;
