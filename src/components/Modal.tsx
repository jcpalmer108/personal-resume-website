import { Window, BackgroundOverlay } from "../styles/components/Modal";

type ModalProps = {
  manageModal: Function
}

export default function Modal({ manageModal }: ModalProps) {
  return (
    <>
      <BackgroundOverlay onClick={() => manageModal()} />
      <Window>
        hi there
      </Window>
    </>
  )
}