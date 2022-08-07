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
  Circle,
  Option,
  Dot,
  Content
} from "../styles/components/Testimonials"
import Section from "./Section"
import arrowLeft from "../assets/images/arrow-left-pink.svg"
import arrowRight from "../assets/images/arrow-right-pink.svg"
import { useState } from "react"

export default function Testimonials({ content }: TestimonialProps) {
  let [ selectedIndex, setSelectedIndex ] = useState(0)
  const quotes = content?.subSection?.quotes

  function updateIndex (moveForward: boolean) {
    if(moveForward) {
      return quotes && selectedIndex >= (quotes.length - 1) ? 
        setSelectedIndex(0) : 
        setSelectedIndex(selectedIndex + 1);
    } else {
      return quotes && selectedIndex <= 0 ? 
      setSelectedIndex(quotes.length - 1) : 
      setSelectedIndex(selectedIndex - 1);  
    }
  }
  
  return (
    <>
      <Section bottom>
        <Wrapper id="testimonials" data-testid="Testimonials">
          <ArrowLeft 
            onClick={() => { updateIndex(false) }} 
            src={arrowLeft} 
            alt="arrow left"
            data-testid="arrow left"
            desktop
          />
          <Content>
            <h2>Testimonials</h2>
            <Quote data-testid="Quote">{quotes && quotes[selectedIndex].quote}</Quote>
            <Person data-testid="Person">{quotes && quotes[selectedIndex].person}</Person>
            <Title data-testid="Title">{quotes && quotes[selectedIndex].title}</Title>
            <Dots data-testid="Dots">
              {quotes && quotes.map((item, index) => {
                return (<Dot selected={selectedIndex === index} key={`Dots ${index + 1} `} />)
              })}
            </Dots>
          </Content>
          <ArrowRight 
            onClick={() => { updateIndex(true) }} 
            src={arrowRight} 
            alt="arrow right" 
            data-testid="arrow right"
            desktop 
          />
          <Arrows>
            <Option onClick={() => { updateIndex(false) }} >
              <Circle />
              <ArrowLeft 
                src={arrowLeft} 
                alt="arrow left" 
                data-testid="arrow left"
              />
            </Option>
            <Option onClick={() => { updateIndex(true) }}>
              <Circle />
              <ArrowRight data-testid="arrow right" src={arrowRight} alt="arrow right"/>
            </Option>
          </Arrows>
        </Wrapper>
      </Section>
    </>
  )
  
}