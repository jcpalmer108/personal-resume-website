import { Skills } from "../types/content";
import Modal from "./Modal"

type SkillsModalProps = {
  closeModal: Function
  content?: Skills[];
}

export default function SkillsModal({ closeModal, content }: SkillsModalProps) {
  console.log(content)
  return <Modal closeModal={closeModal}>skills modal</Modal>
}