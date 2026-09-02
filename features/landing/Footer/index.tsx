import { Separator } from "@/components/ui/separator";
import Logo from "../../../components/shared/Logo";
import BackToTopButton from "./components/BackToTopButton";
import FooterFeatures from "./components/FooterFeatures";
import SocialMediaLinks from "./components/SocialMediaLinks";
import FooterCredits from "./components/FooterCredits";

function Footer() {
  return (
    <footer className="mt-20 border-t py-8 md:mt-40">
      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <BackToTopButton />
        </div>

        <Separator />

        <FooterFeatures />

        <Separator />

        <SocialMediaLinks />

        <FooterCredits />
      </div>
    </footer>
  );
}

export default Footer;
