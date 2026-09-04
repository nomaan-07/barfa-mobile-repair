"use client";
import { accountNavItems, adminNavItems } from "@/constants/navigation/panel";
import { usePathname } from "next/navigation";

function PanelPageTitle() {
  const pathname = usePathname();

  const currentItem = pathname.includes("admin")
    ? adminNavItems.find((item) => item.url === pathname)
    : accountNavItems.find((item) => item.url === pathname);

  return (
    <h1 className="text-xl font-semibold sm:text-2xl">{currentItem?.title}</h1>
  );
}

export default PanelPageTitle;
