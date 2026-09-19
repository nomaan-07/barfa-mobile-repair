"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface AdminPaginationProps {
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
}

function AdminPagination({
  totalPages,
  currentPage,
  rowsPerPage,
  rowsPerPageOptions,
}: AdminPaginationProps) {
  const updateSearchParams = useUpdateSearchParams();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToPage = (page: number) => updateSearchParams({ page });

  function changeRowsPerPage(value: string | null) {
    if (!value) return;

    updateSearchParams({
      limit: value,
      page: 1,
    });
  }

  return (
    <div className="flex items-center justify-between">
      <Field orientation="horizontal" className="w-fit max-sm:hidden">
        <FieldLabel
          className="text-muted-foreground font-normal"
          htmlFor="select-rows-per-page"
        >
          نمایش در هر صفحه
        </FieldLabel>
        <Select value={String(rowsPerPage)} onValueChange={changeRowsPerPage}>
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue>{rowsPerPage.toLocaleString("fa-IR")}</SelectValue>
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              {rowsPerPageOptions.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option.toLocaleString("fa-IR")}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <div className="flex items-center gap-4 max-sm:w-full lg:gap-8">
        <span className="text-muted-foreground shrink-0 text-sm">
          صفحه {currentPage.toLocaleString("fa-IR")} از{" "}
          {totalPages.toLocaleString("fa-IR")}
        </span>

        <Pagination className="justify-end">
          <PaginationContent className="gap-2">
            {/* First page */}
            <PaginationItem className="max-lg:hidden">
              <Button
                disabled={isFirstPage}
                aria-label="صفحه اول"
                size="icon"
                variant="outline"
                onClick={() => goToPage(1)}
              >
                <ChevronsRight />
              </Button>
            </PaginationItem>

            {/* Previous page */}
            <PaginationItem>
              <Button
                disabled={isFirstPage}
                aria-label="صفحه قبلی"
                size="icon"
                variant="outline"
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronRight />
              </Button>
            </PaginationItem>

            {/* Next page */}
            <PaginationItem>
              <Button
                disabled={isLastPage}
                aria-label="صفحه بعدی"
                size="icon"
                variant="outline"
                onClick={() => goToPage(currentPage + 1)}
              >
                <ChevronLeft />
              </Button>
            </PaginationItem>

            {/* Last page */}
            <PaginationItem className="max-lg:hidden">
              <Button
                disabled={isLastPage}
                aria-label="صفحه آخر"
                size="icon"
                variant="outline"
                onClick={() => goToPage(totalPages)}
              >
                <ChevronsLeft />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default AdminPagination;
