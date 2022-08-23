import { 
  Wrapper,
  Icon,
  Industry,
  Title,
  Description,
  Heading,
  TitleLine
} from "../styles/components/Project"
import { ProjectProps } from "../types/Project"

export default function Project({ icon, industry, title, description }: ProjectProps) {
  return (
    <Wrapper data-testid="Project">
      <Heading>
        <Icon data-testid="Icon" src={require("../assets/images/" + icon + ".svg")} />
        <TitleLine>
          <Title data-testid="Title">{title}</Title>
          <Industry data-testid="Industry">{industry}</Industry>
        </TitleLine>
      </Heading>
      <Description data-testid="Description">
        {description.map((paragraph, index) => <p key={`Paragraph ${index + 1}`}>{paragraph}</p>)}
      </Description>
    </Wrapper>
  )
}