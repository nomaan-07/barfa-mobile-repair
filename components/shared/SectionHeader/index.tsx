import SectionDescription from "./components/SectionDescription";
import SectionTitle from "./components/SectionTitle";

interface SectionHeaderProps {
  title: string;
  description: string;
}

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <SectionTitle title={title} />
      <SectionDescription description={description} />
    </div>
  );
}

export default SectionHeader;
