import { Wrapper, Label, Info } from "../styles/components/Details";
import { DetailsProps } from "../types/Details"; 

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