import { LucideIcon } from "lucide-react";

interface ContactLinkProps {
  href: string;
  title: string;
  icon: LucideIcon;
}

function ContactLink({ href, title, icon }: ContactLinkProps) {
  const Icon = icon;
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={
        "md:hover:bg-primary/5 md:hover:border-primary/20 md:hover:text-primary flex items-start gap-3 rounded-xl border p-4 md:transition-colors"
      }
    >
      <Icon className="size-5 shrink-0" strokeWidth={1.5} />
      <span className="text-sm font-medium">{title}</span>
    </a>
  );
}

export default ContactLink;
