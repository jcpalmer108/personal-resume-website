import React from "react";
import scroll from "../assets/images/icons/scroll.svg";
import {
  Content,
  Description,
  DesktopPhoto,
  DiscoverMore,
  Main,
  MobilePhoto,
  Title,
} from "../styles/components/Landing";
import { LandingProps } from "../types/Landing";
import Button from "./Button";
import Section from "./Section";
import SeparatingLine from "./SeparatingLine";

export default function Landing({ content }: LandingProps) {
  const defaultImage = "pexels-ekaterina-bolovtsova-4049791.jpg";

  return (
    <Section light wide>
      <Main data-testid="Main">
        <Content>
          <Title>{content?.title}</Title>
          <MobilePhoto
            src={require("../assets/images/gallery/" +
              (content?.image || defaultImage))}
            alt="landing mobile"
          />
          {content?.description &&
            content.description.map((paragraph, index) => (
              <Description
                key={`Description ${index + 1}`}
                data-testid={`Description ${index + 1}`}
              >
                {paragraph}
              </Description>
            ))}
          <Button
            label={content?.action?.text || "click me"}
            url={content?.action?.link || "#contact"}
          />
        </Content>
        <DesktopPhoto
          src={require("../assets/images/gallery/" +
            (content?.image || defaultImage))}
          alt="landing desktop"
        />
      </Main>
      <SeparatingLine light />
      <DiscoverMore data-testid="DiscoverMore">
        <img src={scroll} alt="scroll" />
        <p>Discover More</p>
      </DiscoverMore>
    </Section>
  );
}
