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
