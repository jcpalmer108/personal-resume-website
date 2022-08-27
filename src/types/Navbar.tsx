import { MenuItem } from "./global";

export type Link = {
  key: string;
  label: string;
  url: string;
};

export type NavbarProps = {
  menu: MenuItem[];
};
