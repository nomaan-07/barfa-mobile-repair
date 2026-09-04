import { MobileMenuContext } from "@/contexts/MobileMenuContext";
import { useContext } from "react";

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (context === undefined)
    throw new Error(
      "MobileMenuContext must be used within a MobileMenuProvider",
    );
  return context;
}
