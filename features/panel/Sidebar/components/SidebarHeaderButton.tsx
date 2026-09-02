import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarHeaderButtonProps } from "../types";

function SidebarHeaderButton({
  variant,
  tooltip,
  icon: Icon,
  onClick,
}: SidebarHeaderButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            size="icon"
            variant={variant}
            className="md:cursor-pointer"
            onClick={onClick}
          />
        }
      >
        <Icon />
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export default SidebarHeaderButton;
