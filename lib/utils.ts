import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toPersianDigits = (value: string) => {
  const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return value.replace(/\d/g, (d) => persian[Number(d)]);
};

export const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("fa-IR");
