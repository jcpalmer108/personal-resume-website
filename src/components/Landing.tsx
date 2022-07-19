import React from "react";
import { LandingProps } from "../types/Landing";
import { 
  Title, 
  Content, 
  Description, 
  MobilePhoto, 
  DesktopPhoto, 
  DiscoverMore, 
  UpperLanding, 
} from "../styles/components/Landing";
import Section from "./Section";
import Button from "./Button";
import SeparatingLine from "./SeparatingLine"
import landing from "../assets/images/pexels-ekaterina-bolovtsova-4049791.jpg";
import scroll from "../assets/images/scroll.svg"

export default function Landing({ content }: LandingProps) {
  return (
    <Section light wide>
      <UpperLanding>
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
      </UpperLanding>
      <SeparatingLine light />
      <DiscoverMore>
        <img src={scroll} alt="scroll" />
        <span>Discover More</span>
      </DiscoverMore>
    </Section>
  )
}