import SectionHeader from "@/components/shared/SectionHeader";
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
    icon: Smartphone,
    title: "تعویض صفحه‌نمایش",
    description: "تعویض صفحه شکسته یا آسیب‌دیده با قطعه مناسب و تست کامل",
  },
  {
    icon: BatteryCharging,
    title: "تعویض باتری",
    description: "رفع مشکل زود خالی شدن، شارژ نشدن و خاموشی ناگهانی گوشی",
  },
  {
    icon: Wrench,
    title: "تعمیرات برد",
    description: "عیب‌یابی و تعمیر مشکلات سخت‌افزاری و قطعات برد گوشی",
  },
  {
    icon: Cable,
    title: "تعمیرات شارژ",
    description: "رفع مشکل شارژ نشدن، قطع و وصل شدن و ایرادات سوکت شارژ",
  },
  {
    icon: Laptop,
    title: "تعمیرات نرم‌افزاری",
    description: "رفع هنگ، کندی، بوت‌لوپ و مشکلات نرم‌افزاری گوشی",
  },
  {
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
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
