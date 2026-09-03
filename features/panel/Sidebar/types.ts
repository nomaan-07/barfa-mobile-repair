import { LucideIcon } from "lucide-react";

type Item = {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
};

type PanelType = "user" | "admin";

export interface SidebarProps {
  type: PanelType;
  items: Item[];
}

export interface SidebarHeaderProps {
  type: PanelType;
}

export interface SidebarProfileProps {
  type: PanelType;
}

export interface SidebarNavProps {
  items: Item[];
}

export interface SidebarNavItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
}
