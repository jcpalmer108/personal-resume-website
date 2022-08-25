import { Skill, Category } from "../types/content";
import Modal from "./Modal"
import { 
  Section, 
  Wrapper, 
  CallToAction,
  Icon,
  Circle,
  Action,
  Details
} from "../styles/components/SkillsModal"
import rocketIcon from "../assets/images/rocket.svg";

type SkillsModalProps = {
  closeModal: Function,
  content?: Skill[],
  categories?: Category[]
}

export default function SkillsModal({ closeModal, content, categories }: SkillsModalProps) {
  return (
    <Modal closeModal={closeModal}>
      <Wrapper>
        {categories?.map((category) => (
          <Section>{category.label}</Section>
        ))}
        <CallToAction>
          <Circle>
            <Icon src={rocketIcon} alt="rocket" />
          </Circle>
          <Details>There's more where that came from.</Details>
          <Action onClick={() => console.log('hi there')}>{"Download my resume".toUpperCase()}</Action>
        </CallToAction>
      </Wrapper>
    </Modal>
  )
}