import { 
  Window, 
  BackgroundOverlay, 
  InnerWindow, 
  CloseIcon,
  LeftRightBorders,
  TopBottomBorders,
} from "../styles/components/Modal";
import closeIcon from "../assets/images/icons/close.svg"
import { ModalProps } from "../types/Modal";


export default function Modal({ closeModal, children }: ModalProps) {

  return (
    <>
      <BackgroundOverlay data-testid="Overlay" onClick={() => closeModal()} />
      <Window>
        <CloseIcon src={closeIcon} alt="close" data-testid="CloseIcon" onClick={() => closeModal()}/>
        <InnerWindow data-testid="Inner">
          <LeftRightBorders data-testid="LeftRight">
            <TopBottomBorders data-testid="TopBottom">
              {children}
            </TopBottomBorders>
          </LeftRightBorders>
        </InnerWindow>
      </Window>
    </>
  )
}