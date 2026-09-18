import AdminSearch from "../../components/AdminSearch";
import AddCustomerButton from "./components/AddCustomerButton";
import CustomersTableSort from "./components/CustomersTableSort";

function CustomersTableControls() {
  return (
    <>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <AdminSearch className="max-sm:order-2" />
        <AddCustomerButton />
      </div>
      <CustomersTableSort />
    </>
  );
}

export default CustomersTableControls;
