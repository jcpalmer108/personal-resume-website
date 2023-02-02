import closeIcon from "../assets/images/icons/close.svg";
import {
  BackgroundOverlay,
  CloseIcon,
  InnerWindow,
  LeftRightBorders,
  TopBottomBorders,
  Window,
} from "../styles/components/Modal";
import { ModalProps } from "../types/Modal";

export default function Modal({ closeModal, children, scrollable }: ModalProps) {
  return (
    <>
      <BackgroundOverlay data-testid="Overlay" onClick={() => closeModal()} />
      <Window data-testid="Modal">
        <CloseIcon
          src={closeIcon}
          alt="close"
          data-testid="CloseIcon"
          onClick={() => closeModal()}
        />
        <InnerWindow>
          <LeftRightBorders>
            <TopBottomBorders data-testid="ChildrenWrapper" scrollable={scrollable}>
              {children}
            </TopBottomBorders>
          </LeftRightBorders>
        </InnerWindow>
      </Window>
    </>
  );
}
