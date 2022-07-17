import { ReactNode } from 'react'
import { Wrapper, Header, Line, Label, Title } from '@/styles/components/Section'
import line from '@/assets/images/label-line.svg';

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
  console.log(light, thin, wide, center)
  return (
    <Wrapper light={light}>
      {label && (
        <Header center={center}>
          <Label>
            <Line src={line} alt="test" />
            <Title>{label.toUpperCase()}</Title>
          </Label>
        </Header>
      )}
      {children}
    </Wrapper>
  )
}