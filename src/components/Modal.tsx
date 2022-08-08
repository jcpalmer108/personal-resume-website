import { Window, BackgroundOverlay } from "../styles/components/Modal";
import { Experience } from "../types/content"

type ModalProps = {
  manageModal: Function
  content?: Experience | undefined | {}
}

export default function Modal({ manageModal, content }: ModalProps) {
  console.log(content)
  return (
    <>
      <BackgroundOverlay onClick={() => manageModal()} />
      <Window>
        blah
      </Window>
    </>
  )
}