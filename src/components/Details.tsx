import { Wrapper, Label, Info } from "../styles/components/Details";
import { DetailsProps } from "../types/Details"; 

export default function Details ({ label, info, noBottom }: DetailsProps) {
  if(!info) {
    return null;
  }

  return (
    <Wrapper noBottom={noBottom} data-testid="Details">
      <Label>{label}</Label>
      <div>
        {info.map((paragraph, index) => <Info key={`Info ${index + 1}`}>{paragraph}</Info>)}
      </div>
    </Wrapper>
  )
}