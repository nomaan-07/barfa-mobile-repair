import CustomersTableControls from "@/features/admin/customers/CustomersTableControls/index";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "مشتریان",
};

function CustomersPage() {
  return (
    <>
      <Suspense fallback={null}>
        <CustomersTableControls />
      </Suspense>
    </>
  );
}

export default CustomersPage;
