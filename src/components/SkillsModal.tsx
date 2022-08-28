import rocketIcon from "../assets/images/icons/rocket.svg";
import {
  Action,
  CallToAction,
  Circle,
  Details,
  RocketIcon,
  Section,
  Subheader,
  Wrapper,
} from "../styles/components/SkillsModal";
import { Skill } from "../types/content";
import { SkillsModalProps } from "../types/SkillsModal";
import Modal from "./Modal";
import LineItem from "./LineItem";
import downloadResume from "../utils/downloadResume";

export default function SkillsModal({
  closeModal,
  content,
  categories,
}: SkillsModalProps) {
  if (!content || !categories) {
    return null;
  }

  return (
    <Modal closeModal={closeModal}>
      <Wrapper data-testid="SkillsModal">
        {categories?.map((category, index) => (
          <Section key={`Section ${index + 1}`} data-testid="Section">
            <Subheader data-testid="Subheader">{category.label}</Subheader>
            <div>
              {content
                ?.filter((skill: Skill) => skill.category === category.key)
                .map((skill: Skill) => (
                  <LineItem
                    key={skill.key}
                    icon={skill.key}
                    skill={skill.label}
                    subtitle={skill.subtitle}
                  />
                ))}
            </div>
          </Section>
        ))}
        <CallToAction data-testid="CallToAction">
          <Circle>
            <RocketIcon src={rocketIcon} alt="rocket" />
          </Circle>
          <Details>There's more where that came from.</Details>
          <Action data-testid="ActionButton" onClick={() => downloadResume()}>
            {"Download my resume".toUpperCase()}
          </Action>
        </CallToAction>
      </Wrapper>
    </Modal>
  );
}
