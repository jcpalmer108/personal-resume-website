import React from "react";
import { LandingProps } from "../types/Landing";
import { Wrapper, Title, Content , Description} from "../styles/components/Landing";
import Section from "./Section";


export default function Landing({ content }: LandingProps) {
  console.log('test: ', content)
  return (
    <Section light wide>
      <Wrapper>
        <Content>
          <Title>{content?.title}</Title>
          <Description>{content?.description}</Description>
        </Content>
      </Wrapper>
    </Section>
  )
}