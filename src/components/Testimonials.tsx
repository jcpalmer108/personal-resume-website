import { TestimonialProps } from "../types/Testimonials"
import { Wrapper } from "../styles/components/Testimonials"
import Section from "./Section"

export default function Testimonials({ content }: TestimonialProps) {
  return (
    <Section label={content?.label}>
      <Wrapper>
        hi there

      </Wrapper>
    </Section>
  )
  
}