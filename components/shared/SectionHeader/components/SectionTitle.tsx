import SectionTitleLine from "./SectionTitleLine";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <SectionTitleLine direction="right" />
      <h2 className="text-primary shrink-0 text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      <SectionTitleLine direction="left" />
    </div>
  );
}

export default SectionTitle;
