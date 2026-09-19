import AdminSearch from "../../components/AdminSearch";
import AddCustomerButton from "./components/AddCustomerButton";
import CustomersTableSort from "./components/CustomersTableSort";

function CustomersTableControls() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex flex-col flex-wrap gap-x-2 gap-y-4 max-sm:order-2 sm:flex-row sm:items-center">
        <AdminSearch />
        <CustomersTableSort />
      </div>
      <AddCustomerButton />
    </div>
  );
}

export default CustomersTableControls;
