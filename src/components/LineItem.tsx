import { LineItemProps } from "../types/LineItem";
import {
  Icon,
  Info,
  Line,
  SkillInfo,
  Subtitle,
} from "../styles/components/LineItem";

export default function LineItem({ icon, skill, subtitle }: LineItemProps) {
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
