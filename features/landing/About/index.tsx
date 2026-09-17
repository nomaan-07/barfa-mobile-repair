import SectionHeader from "@/features/landing/components/SectionHeader";
import Features from "./components/Features";
import WorkingHours from "./components/WorkingHours";

function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader
        title="درباره برفا"
        description="تخصص در تعمیر، تعهد به کیفیت"
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Features />
        <WorkingHours />
      </div>
    </section>
  );
}

export default About;
