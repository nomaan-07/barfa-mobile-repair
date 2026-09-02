import About from "@/features/landing/About";
import Contact from "@/features/landing/Contact";
import Footer from "@/features/landing/Footer";
import Hero from "@/features/landing/Hero";
import LandingHeader from "@/features/landing/LandingHeader";
import Services from "@/features/landing/Services";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="mx-auto max-w-7xl space-y-20 px-4 md:space-y-40">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
