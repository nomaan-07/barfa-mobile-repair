import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function AddCustomerButton() {
  return (
    <Button className="w-fit self-end max-sm:order-1" variant="outline">
      <PlusIcon data-icon="inline-start" /> افزودن مشتری
    </Button>
  );
}

export default AddCustomerButton;
