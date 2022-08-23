import { Wrapper, Label, Info } from "../styles/components/Details";

type DetailsProps = {
  label: string,
  info?: string[],
  noBottom?: boolean
}

export default function Details ({ label, info = [], noBottom }: DetailsProps) {
  return (
    <Wrapper noBottom={noBottom} data-testid="Details">
      <Label data-testid="Label">{label}</Label>
      <div data-testid="Description">
        {info.map((paragraph, index) => <Info key={`Info ${index + 1}`}>{paragraph}</Info>)}
      </div>
    </Wrapper>
  )
}