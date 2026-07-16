import { ReactNode } from "react";

export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  icon?: ReactNode;
  image?: string;
  badge?: "New" | "Sale";
  featured?: boolean;
  children?: MenuItem[];
}