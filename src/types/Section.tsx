import { ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
  label?: string;
  light?: boolean;
  thin?: boolean;
  wide?: boolean;
  center?: boolean;
  bottom?: boolean;
  noTop?: boolean;
  noBorder?: boolean;
};

export type WrapperProps = {
  light?: boolean;
  thin?: boolean;
  bottom?: boolean;
  noBorder?: boolean;
};

export type HeaderProps = {
  center?: boolean;
  noTop?: boolean;
};

export type ChildrenProps = {
  padded?: boolean;
};
