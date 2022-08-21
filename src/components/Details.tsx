import { Wrapper, Label, Info } from "../styles/components/Details";

type DetailsProps = {
  label: string,
  info?: string[]
}

export default function Details ({ label, info = []}: DetailsProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {info.map((paragraph) => <Info>{paragraph}</Info>)}
    </Wrapper>
  )
}