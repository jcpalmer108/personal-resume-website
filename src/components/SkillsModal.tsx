import { Skill, Category } from "../types/content";
import Modal from "./Modal"
import { 
  Section, 
  Wrapper, 
  CallToAction,
  RocketIcon,
  Circle,
  Action,
  Details,
  Subheader,
  Line,
  Icon,
  Info
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
        {categories?.map((category, index) => (
          <Section key={`Section ${index + 1}`}>
            <Subheader>{category.label}</Subheader>
            {content?.filter((skill: Skill) => skill.category === category.key).map((skill:Skill) => <LineItem key={skill.key} icon={skill.key} skill={skill.label}/>)}
          </Section>
        ))}
        <CallToAction>
          <Circle>
            <RocketIcon src={rocketIcon} alt="rocket" />
          </Circle>
          <Details>There's more where that came from.</Details>
          <Action onClick={() => console.log('hi there')}>{"Download my resume".toUpperCase()}</Action>
        </CallToAction>
      </Wrapper>
    </Modal>
  )
}

type LineItemProps = {
  icon: string,
  skill: string
}
function LineItem ({ icon, skill }: LineItemProps) {
  return (
    <Line>
      <Icon src={require("../assets/images/skills/modal/" + icon + ".svg")}/>
      <Info>{skill}</Info>
    </Line>
  )
}