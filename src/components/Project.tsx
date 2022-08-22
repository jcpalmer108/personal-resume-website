import { 
  Wrapper,
  Icon,
  Industry,
  Title,
  Description
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
      <Icon src={require("../assets/images/" + icon + ".svg")} />
      <Title>{title}</Title>
      <Industry>{industry}</Industry>
      <Description>
        {description.map((paragraph) => <p>{paragraph}</p>)}
      </Description>
    </Wrapper>
  )
}