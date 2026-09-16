import { DateSort } from "@/types/sort";

export const dateSortOptions = [
  { label: "جدیدترین", value: "newest" },
  { label: "قدیمی‌ترین", value: "oldest" },
] satisfies {
  label: string;
  value: DateSort;
}[];

export const DEFAULT_DATE_SORT = "newest";
