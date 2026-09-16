import AdminOrdersTable from "./AdminOrdersTable";
import AdminOrdersTableControls from "./AdminOrdersTableControls";
import AdminStatusTabs from "./AdminStatusTabs";

function AdminOrders() {
  return (
    <div className="space-y-6">
      <AdminOrdersTableControls />
      <AdminStatusTabs />
      <AdminOrdersTable />
    </div>
  );
}

export default AdminOrders;
