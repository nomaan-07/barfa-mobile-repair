import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/NavLinks";

function NavLinks() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <a
            className={buttonVariants({ variant: "ghost" })}
            href={link.href}
            key={link.href}
          >
            <Icon data-icon="inline-start" /> {link.title}
          </a>
        );
      })}
    </nav>
  );
}

export default NavLinks;
