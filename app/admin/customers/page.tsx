import AdminPagination from "@/features/admin/components/AdminPagination";
import CustomersTable from "@/features/admin/customers/CustomersTable";
import CustomersTableControls from "@/features/admin/customers/CustomersTableControls/index";
import { getPaginationParams } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "مشتریان",
};

interface CustomersPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

// TODO: Load from website settings.
const rowsPerPageOptions = [10, 20, 30, 40];

// TODO: temporary
const totalPages = 10;

async function CustomersPage({ searchParams }: CustomersPageProps) {
  const params = await searchParams;

  const { currentPage, rowsPerPage } = getPaginationParams(
    params.page,
    params.limit,
    totalPages,
    rowsPerPageOptions,
  );

  return (
    <>
      <Suspense fallback={null}>
        <CustomersTableControls />
      </Suspense>

      <CustomersTable currentPage={currentPage} rowsPerPage={rowsPerPage} />

      <Suspense fallback={null}>
        <AdminPagination
          totalPages={totalPages}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </Suspense>
    </>
  );
}

export default CustomersPage;
