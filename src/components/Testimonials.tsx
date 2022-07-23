import { TestimonialProps } from "../types/Testimonials"
import { 
  Wrapper, 
  Quote, 
  Person, 
  Title, 
  Dots, 
  ArrowLeft, 
  ArrowRight, 
  Arrows, 
  Content 
} from "../styles/components/Testimonials"
import Section from "./Section"

export default function Testimonials({ content }: TestimonialProps) {
  
  return (
    <Section>
      <Wrapper>
        <ArrowLeft />
        <Content>
          <h2>Testimonials</h2>
          <Quote>Test</Quote>
          <Person>blah</Person>
          <Title>blah</Title>
          <Dots>test</Dots>
        </Content>
        <ArrowRight />
        <Arrows>
          <ArrowLeft />
          <ArrowRight />
        </Arrows>
      </Wrapper>
    </Section>
  )
  
}