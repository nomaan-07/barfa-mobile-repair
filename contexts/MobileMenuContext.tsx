"use client";

import { createContext, ReactNode, useState } from "react";

interface MobileMenuContextType {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined,
);

interface MobileMenuProviderProps {
  children: ReactNode;
}

function MobileMenuProvider({ children }: MobileMenuProviderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <MobileMenuContext.Provider
      value={{ isMobileMenuOpen, openMobileMenu, closeMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuContext, MobileMenuProvider };
