import { LucideIcon } from "lucide-react";

type Item = {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
};

type SidebarType = "user" | "admin";

export interface SidebarProps {
  type: SidebarType;
  items: Item[];
}

export interface SidebarHeaderProps {
  type: SidebarType;
}

export interface SidebarProfileProps {
  type: SidebarType;
}

export interface SidebarHeaderButtonProps {
  variant: "destructive" | "outline";
  tooltip: string;
  icon: LucideIcon;
  onClick: () => void;
}

export interface SidebarNavProps {
  items: Item[];
}

export interface SidebarNavItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
}
