import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import About from "@/features/landing/About";
import Contact from "@/features/landing/Contact";
import Hero from "@/features/landing/Hero";
import Services from "@/features/landing/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
