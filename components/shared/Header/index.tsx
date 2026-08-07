import Logo from "../Logo";
import AccountButton from "./AccountButton";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className="border-b-secondary border-b">
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

export default Header;
