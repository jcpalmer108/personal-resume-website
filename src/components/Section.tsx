import { ReactNode } from 'react'
import { 
  Wrapper, 
  Header, 
  Line, 
  Label, 
  Title, 
  Children
} from "../styles/components/Section";
import line from "../assets/images/label-line.svg";

type SectionProps = {
  children: ReactNode,
  label?: string,
  light?: boolean,
  thin?: boolean,
  wide?: boolean,
  center?: boolean
}

export default function Section({ 
  label,
  children,
  light,
  thin,
  wide,
  center
}: SectionProps) {
  return (
    <Wrapper light={light} thin={thin} data-testid="Wrapper">
      {label && (
        <Header data-testid="Header" center={center} >
          <Label data-testid="Label">
            <Line src={line} alt="test"/>
            <Title>{label.toUpperCase()}</Title>
          </Label>
        </Header>
      )}
      <Children padded={!wide} data-testid="Children">{children}</Children>
    </Wrapper>
  )
}