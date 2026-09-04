import { buttonVariants } from "@/components/ui/button";
import { landingNavItems } from "@/constants/navigation/landing";

function NavLinks() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {landingNavItems.map((link) => {
        const Icon = link.icon;
        return (
          <a
            className={buttonVariants({ variant: "ghost" })}
            href={link.url}
            key={link.url}
          >
            <Icon data-icon="inline-start" /> {link.title}
          </a>
        );
      })}
    </nav>
  );
}

export default NavLinks;
