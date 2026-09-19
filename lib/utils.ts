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

export function getPaginationParams(
  page: string | undefined,
  limit: string | undefined,
  totalPages: number,
  rowsPerPageOptions: number[],
) {
  const requestedPage = Number(page) || 1;
  const rowsPerPageParam = Number(limit);

  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);

  const rowsPerPage = rowsPerPageOptions.includes(rowsPerPageParam)
    ? rowsPerPageParam
    : rowsPerPageOptions[0];

  return {
    currentPage,
    rowsPerPage,
  };
}

export function getRowNumber(page: number, rowsPerPage: number, index: number) {
  return (page - 1) * rowsPerPage + index + 1;
}
