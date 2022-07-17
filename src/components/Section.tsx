import { ReactNode } from 'react'
import { Wrapper, Header, Line, Label, Title } from '@/styles/components/Section'
import line from '@/assets/images/label-line.svg';

type SectionProps = {
  label?: string,
  children: ReactNode,
}

export default function Section({ label, children }: SectionProps) {
  console.log()
  return (
    <Wrapper>
      {label && (
        <Header>
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