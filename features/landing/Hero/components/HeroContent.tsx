import HeroDescription from "./HeroDescription";
import HeroLinks from "./HeroLinks";
import HeroTitle from "./HeroTitle";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-6 md:gap-10">
      <HeroTitle />
      <HeroDescription />
      <HeroLinks />
    </div>
  );
}

export default HeroContent;
