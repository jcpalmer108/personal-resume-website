import { ExperienceProps } from "../types/Experience"
import { Wrapper } from "../styles/components/Experience"
import Section from "./Section"

export default function Experience({ content }: ExperienceProps) {
  return (
    <Section label={content?.label}>
      <Wrapper>blah blha </Wrapper>
    </Section>
  )
}