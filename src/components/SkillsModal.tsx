import rocketIcon from "../assets/images/icons/rocket.svg";
import {
  Action,
  CallToAction,
  Circle,
  Details,
  Icon,
  Info,
  Line,
  RocketIcon,
  Section,
  SkillInfo,
  Subheader,
  Subtitle,
  Wrapper,
} from "../styles/components/SkillsModal";
import { Category, Skill } from "../types/content";
import Modal from "./Modal";

type SkillsModalProps = {
  closeModal: Function;
  content?: Skill[];
  categories?: Category[];
};

export default function SkillsModal({
  closeModal,
  content,
  categories,
}: SkillsModalProps) {
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
        <CallToAction>
          <Circle>
            <RocketIcon src={rocketIcon} alt="rocket" />
          </Circle>
          <Details>There's more where that came from.</Details>
          <Action onClick={() => console.log("hi there")}>
            {"Download my resume".toUpperCase()}
          </Action>
        </CallToAction>
      </Wrapper>
    </Modal>
  );
}

type LineItemProps = {
  icon: string;
  skill: string;
  subtitle?: string;
};
function LineItem({ icon, skill, subtitle }: LineItemProps) {
  return (
    <Line>
      <Icon src={require("../assets/images/skills/modal/" + icon + ".svg")} />
      <SkillInfo>
        <Info>{skill}</Info>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </SkillInfo>
    </Line>
  );
}
