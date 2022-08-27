import socials from "../assets/content/socials.json";
import {
  AboutWrapper,
  Action,
  BottomSpacing,
  Connect,
  Content,
  Degree,
  Description,
  Icon,
  Label,
  Link,
  Prompt,
  Question,
  School,
  Schooling,
  SocialLabel,
  Socials,
  StartProject,
  Title,
} from "../styles/components/About";
import { AboutProps } from "../types/About";
import { Education } from "../types/content";
import { SocialLink } from "../types/socials";
import Section from "./Section";

export default function About({ content }: AboutProps) {
  const { links } = socials;

  if (content === undefined) {
    return null;
  }

  return (
    <div id="about" data-testid="About">
      <Section label={content?.label}>
        <Title data-testid="Title">{content?.title}</Title>
        <AboutWrapper data-testid="Content">
          <Content>
            {content?.description &&
              content.description.map((paragraph, index) => (
                <Description
                  data-testid={`Description ${index + 1}`}
                  key={`Description ${index + 1}`}
                >
                  {paragraph}
                </Description>
              ))}
          </Content>
          <Schooling data-testid="Schooling">
            <h3>Education</h3>
            {content?.subSection &&
              content.subSection.education?.map((item: Education, index) => (
                <School
                  data-testid={`School ${index + 1}`}
                  key={`School ${index + 1}`}
                >
                  <h4>{item.school}</h4>
                  <Degree>
                    {item.degree} - {item.timeline.start}-{item.timeline.end}
                  </Degree>
                </School>
              ))}
          </Schooling>
        </AboutWrapper>
      </Section>
      <Section wide>
        <Action>
          <Connect data-testid="Connect">
            <SocialLabel>Connect with Me</SocialLabel>
            <Socials>
              {links &&
                links.map(({ key, label, url }: SocialLink) => (
                  <Link href={url} key={key}>
                    <Icon
                      src={require("../assets/images/socials/" + key + ".svg")}
                    />
                    <Label>{label}</Label>
                  </Link>
                ))}
            </Socials>
          </Connect>
          <Prompt>
            <Question>What are you waiting for?</Question>
            <StartProject data-testid="Start a Project" href="#contact">
              START A PROJECT
            </StartProject>
          </Prompt>
        </Action>
      </Section>
      <Section wide bottom>
        <BottomSpacing />
      </Section>
    </div>
  );
}
