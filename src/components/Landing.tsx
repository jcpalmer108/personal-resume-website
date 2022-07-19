import React from "react";
import { LandingProps } from "../types/Landing";
import { Wrapper, Title, Content , Description, MobilePhoto, DesktopPhoto} from "../styles/components/Landing";
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
          <MobilePhoto src={landing} alt="landing"/>
          <Description>{content?.description}</Description>
          <Button 
            label={content?.action?.text || 'click me'} 
            url={content?.action?.link || '#contact'}
          />
        </Content>
        <DesktopPhoto src={landing} alt="landing"/>
      </Wrapper>
    </Section>
  )
}