import { 
  Wrapper, 
  Header, 
  Line, 
  Label, 
  Title, 
  Children
} from "../styles/components/Section";
import line from "../assets/images/label-line.svg";
import { SectionProps } from "../types/Section"

export default function Section({ 
  label,
  children,
  light,
  thin,
  wide,
  center,
  bottom,
  noTop
}: SectionProps) {
  return (
    <Wrapper light={light} thin={thin} bottom={bottom} data-testid="Wrapper">
      {label && (
        <Header noTop={noTop} data-testid="Header" center={center} >
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