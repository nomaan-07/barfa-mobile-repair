import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import ContactLink from "./components/ContactLink";

// FIXME: replace with real data
const contactMethods = [
  {
    id: "phone",
    icon: Phone,
    title: "۰۹۱۲۳۴۵۶۷۸۹",
    href: "tel:+989123456789",
  },
  {
    id: "email",
    icon: Mail,
    title: "BarfaMobile@gmail.com",
    href: "mailto:BarfaMobile@gmail.com",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "پیام در واتساپ",
    href: "https://wa.me/989123456789",
  },
  {
    id: "telegram",
    icon: Send,
    title: "پیام در تلگرام",
    href: "https://t.me/barfamobile",
  },
  {
    id: "address",
    icon: MapPin,
    title:
      "خاش ، خیابان انقلاب ، نبش انقلاب ۲۴ ، کنار ۵ طبقه ، پلاک ۳۹ ، تعمیرات موبایل برفا",
    href: "https://maps.google.com/?q=YOUR_LOCATION",
  },
];

function Contact() {
  return (
    <section id="contact">
      <SectionHeader title="تماس با ما" />
      <div className="mx-auto max-w-md space-y-4">
        {contactMethods.map(({ id, ...method }) => (
          <ContactLink key={id} {...method} />
        ))}
      </div>
    </section>
  );
}

export default Contact;
