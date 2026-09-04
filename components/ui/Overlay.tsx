import { cn } from "@/lib/utils";

interface OverlayProps {
  desktopHidden?: boolean;
  onClick: () => void;
  open: boolean;
}

function Overlay({ open, onClick, desktopHidden = false }: OverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/10 backdrop-blur-xs duration-300",
        desktopHidden && "md:hidden",
        open
          ? "animate-in fade-in-0"
          : "animate-out fade-out-0 pointer-events-none opacity-0",
      )}
      onClick={onClick}
    />
  );
}

export default Overlay;
