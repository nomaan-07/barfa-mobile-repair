import HeroDescription from "./HeroDescription";
import HeroLinks from "./HeroLinks";
import HeroTitle from "./HeroTitle";

function HeroContent() {
  // FIXME: center in mobile
  return (
    <div className="flex flex-col justify-center gap-6 text-center md:gap-10 md:text-start">
      <HeroTitle />
      <HeroDescription />
      <HeroLinks />
    </div>
  );
}

export default HeroContent;
