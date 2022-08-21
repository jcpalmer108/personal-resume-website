import { 
  Wrapper,
  Icon
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
      <div>{industry}</div>
      <div>{title}</div>
      {description.map((paragraph) => <p>{paragraph}</p>)}
    </Wrapper>
  )
}