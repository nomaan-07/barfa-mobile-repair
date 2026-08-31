import SectionHeader from "@/features/landing/components/SectionHeader";
import {
  BatteryCharging,
  Cable,
  Droplets,
  Laptop,
  Smartphone,
  Wrench,
} from "lucide-react";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    id: "screen-replacement",
    icon: Smartphone,
    title: "تعویض صفحه‌نمایش",
    description: "تعویض صفحه شکسته یا آسیب‌دیده با قطعه مناسب و تست کامل",
  },
  {
    id: "battery-replacement",
    icon: BatteryCharging,
    title: "تعویض و بررسی باتری",
    description: "رفع مشکل زود خالی شدن، شارژ نشدن و خاموشی ناگهانی گوشی",
  },

  {
    id: "board-repair",
    icon: Wrench,
    title: "تعمیرات برد",
    description: "عیب‌یابی و تعمیر مشکلات سخت‌افزاری و قطعات برد گوشی",
  },
  {
    id: "charging-repair",
    icon: Cable,
    title: "تعمیرات شارژ",
    description: "رفع مشکل شارژ نشدن، قطع و وصل شدن و ایرادات سوکت شارژ",
  },
  {
    id: "software-repair",
    icon: Laptop,
    title: "تعمیرات نرم‌افزاری",
    description: "رفع هنگ، کندی، بوت‌لوپ و مشکلات نرم‌افزاری گوشی",
  },
  {
    id: "water-damage",
    icon: Droplets,
    title: "آب‌خوردگی",
    description: "بررسی و عیب‌یابی گوشی‌های آسیب‌دیده از آب و رطوبت",
  },
];

function Services() {
  return (
    <section id="services">
      <SectionHeader
        title="خدمات ما"
        description="عیب‌یابی دقیق، تعمیر مطمئن"
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {services.map(({ id, ...service }) => (
          <ServiceCard key={id} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
