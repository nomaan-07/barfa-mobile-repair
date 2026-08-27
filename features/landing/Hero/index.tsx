import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

function Hero() {
  return (
    <section className="mt-8 md:mt-24">
      <div className="grid w-full gap-6 md:grid-cols-2 md:gap-10">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
