interface SectionDescriptionProps {
  description: string;
}

function SectionDescription({ description }: SectionDescriptionProps) {
  return (
    <p className="text-muted-foreground text-sm md:text-base">{description}</p>
  );
}

export default SectionDescription;
