import { ReactNode } from "react";

export type ModalProps = {
  closeModal: Function;
  children: ReactNode;
  scrollable?: boolean;
};
