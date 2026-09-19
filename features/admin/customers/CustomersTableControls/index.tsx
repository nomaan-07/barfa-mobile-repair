import AdminSearch from "../../components/AdminSearch";
import AddCustomerButton from "./components/AddCustomerButton";
import CustomersTableSort from "./components/CustomersTableSort";

function CustomersTableControls() {
  return (
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
      <div className="flex flex-col flex-wrap gap-6 max-sm:order-2 sm:flex-row sm:items-center sm:gap-2">
        <CustomersTableSort />
        <AdminSearch />
      </div>
      <AddCustomerButton />
    </div>
  );
}

export default CustomersTableControls;
