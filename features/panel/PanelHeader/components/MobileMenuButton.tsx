"use client";

import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { PanelRight } from "lucide-react";

function MobileMenuButton() {
  const { openMobileMenu } = useMobileMenu();

  return (
    <Button
      size="icon"
      variant="outline"
      className="md:hidden"
      onClick={openMobileMenu}
    >
      <PanelRight />
    </Button>
  );
}

export default MobileMenuButton;
