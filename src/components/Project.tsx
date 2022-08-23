import { 
  Wrapper,
  Icon,
  Industry,
  Title,
  Description,
  Heading,
  TitleLine
} from "../styles/components/Project"

type ProjectProps = {
  icon: string,
  industry: string,
  title: string,
  description: string[]
}

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
        {description.map((paragraph) => <p>{paragraph}</p>)}
      </Description>
    </Wrapper>
  )
}