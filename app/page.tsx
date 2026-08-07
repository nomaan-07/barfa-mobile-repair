import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import About from "@/features/landing/About";
import Contact from "@/features/landing/Contact";
import Hero from "@/features/landing/Hero";
import Services from "@/features/landing/Services";

export default function Home() {
  return (
    <>
      <Header />
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
