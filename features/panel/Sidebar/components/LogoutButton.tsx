import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

function LogoutButton() {
  return (
    <Button
      variant="secondary"
      className="w-full justify-start md:cursor-pointer"
      size="lg"
    >
      <LogOut data-icon="inline-start" />
      خروج از حساب کاربری
    </Button>
  );
}

export default LogoutButton;
