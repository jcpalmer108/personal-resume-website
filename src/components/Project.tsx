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
    <Wrapper>
      <Heading>
        <Icon src={require("../assets/images/" + icon + ".svg")} />
        <TitleLine>
          <Title>{title}</Title>
          <Industry>{industry}</Industry>
        </TitleLine>
      </Heading>
      <Description>
        {description.map((paragraph) => <p>{paragraph}</p>)}
      </Description>
    </Wrapper>
  )
}