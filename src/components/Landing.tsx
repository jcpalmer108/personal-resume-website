import React from "react";
import { LandingProps } from "../types/Landing";
import { Wrapper, Title, Content , Description, Photo} from "../styles/components/Landing";
import Section from "./Section";
import Button from "./Button";
import landing from "../assets/images/pexels-ekaterina-bolovtsova-4049791.jpg";


export default function Landing({ content }: LandingProps) {
  console.log('test: ', content)
  return (
    <Section light wide>
      <Wrapper>
        <Content>
          <Title>{content?.title}</Title>
          <Photo src={landing} alt="landing" />
          <Description>{content?.description}</Description>
          <Button 
            label={content?.action?.text.toUpperCase() || 'CLICK ME'} 
            url={content?.action?.link || '#contact'}
          />
        </Content>
      </Wrapper>
    </Section>
  )
}