import Logo from "@/components/shared/Logo";
import AccountButton from "./components/AccountButton";
import NavLinks from "./components/NavLinks";

function LandingHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b border-b-slate-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Logo />
          <NavLinks />
        </div>
        <AccountButton />
      </div>
    </header>
  );
}

export default LandingHeader;
