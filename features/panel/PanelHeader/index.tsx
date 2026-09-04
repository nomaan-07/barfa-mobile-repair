import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CurrentDate from "./components/CurrentDate";
import MobileMenuButton from "./components/MobileMenuButton";
import PanelPageTitle from "./components/PanelPageTitle";
import ThemeToggle from "./components/ThemeToggle";

function PanelHeader() {
  return (
    <Card className="max-md:rounded-none">
      <CardContent className="flex items-center justify-between">
        <div className="max-md:flex max-md:items-center max-md:gap-4">
          <MobileMenuButton />
          <PanelPageTitle />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Separator orientation="vertical" className="max-md:hidden" />
          <CurrentDate />
        </div>
      </CardContent>
    </Card>
  );
}

export default PanelHeader;
