import AccountActiveOrders from "@/features/account/home/AccountActiveOrders";
import AccountStats from "@/features/account/home/AccountStats";

function AccountPage() {
  return (
    <>
      <AccountStats />
      <AccountActiveOrders />
    </>
  );
}

export default AccountPage;
