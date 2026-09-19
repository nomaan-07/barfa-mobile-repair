import AdminPagination from "@/features/admin/components/AdminPagination";
import AdminOrdersTable from "@/features/admin/orders/AdminOrdersTable";
import AdminOrdersTableControls from "@/features/admin/orders/AdminOrdersTableControls";
import AdminStatusTabs from "@/features/admin/orders/AdminStatusTabs";
import { getPaginationParams } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "سفارش‌ها",
};

interface AdminPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

// TODO: Load from website settings.
const rowsPerPageOptions = [10, 20, 30, 40];

// TODO: temporary
const totalPages = 10;

async function OrdersPage({ searchParams }: AdminPageProps) {
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
        <AdminOrdersTableControls />
        <AdminStatusTabs />
      </Suspense>

      <AdminOrdersTable currentPage={currentPage} rowsPerPage={rowsPerPage} />

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

export default OrdersPage;
