import heroImage from "@/public/Hero.webp";
import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex items-center justify-center md:order-2">
      <Image
        alt="تعمیرات موبایل برفا"
        src={heroImage}
        width={460}
        height={460}
        placeholder="blur"
        className="rounded-4xl object-cover select-none"
      />
    </div>
  );
}

export default HeroImage;
