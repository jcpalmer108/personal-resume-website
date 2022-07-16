import { ReactNode } from 'react'
import Wrapper from '@/styles/components/Section'

type SectionProps = {
  label?: string,
  children: ReactNode,
}

export default function Section({ label, children }: SectionProps) {
  console.log()
  return (
    <Wrapper>
      {/* <Label>
        {label}
      </Label> */}
      {children}
      Test wrapping
    </Wrapper>
  )
}