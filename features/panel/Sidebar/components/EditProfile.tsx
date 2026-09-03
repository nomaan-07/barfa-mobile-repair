import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Settings } from "lucide-react";

function EditProfile() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            size="icon"
            className="md:cursor-pointer"
            // FIXME: Actual Function
            onClick={() => {}}
          />
        }
      >
        <Settings className="size-4.5" />
      </TooltipTrigger>
      <TooltipContent>ویرایش حساب کاربری</TooltipContent>
    </Tooltip>
  );
}

export default EditProfile;
