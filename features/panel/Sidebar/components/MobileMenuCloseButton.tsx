import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { X } from "lucide-react";

function MobileMenuCloseButton() {
  const { closeMobileMenu } = useMobileMenu();
  return (
    <Button size="icon" className="md:hidden" onClick={closeMobileMenu}>
      <X className="size-5" />
    </Button>
  );
}

export default MobileMenuCloseButton;
