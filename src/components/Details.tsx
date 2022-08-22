import { Wrapper, Label, Info } from "../styles/components/Details";

type DetailsProps = {
  label: string,
  info?: string[],
  noBottom?: boolean
}

export default function Details ({ label, info = [], noBottom }: DetailsProps) {
  return (
    <Wrapper noBottom={noBottom}>
      <Label>{label}</Label>
      {info.map((paragraph) => <Info>{paragraph}</Info>)}
    </Wrapper>
  )
}