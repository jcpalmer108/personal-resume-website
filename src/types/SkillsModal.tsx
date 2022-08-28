import { Category, Skill } from "../types/content";

export type SkillsModalProps = {
  closeModal: Function;
  content?: Skill[];
  categories?: Category[];
};
