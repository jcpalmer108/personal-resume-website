import { SkillsProps, TileProps } from "../types/Skills";
import { 
  Mobile,
  NotMobile,
  Title,
  Link,
  Logo,
  Description,
  Paragraph,
  Mosaic,
  Cell,
  Content
} from "../styles/components/Skills";
import Section from "../components/Section"
import { Skills as SkillsContent } from "../types/content"
import Marquee from "react-fast-marquee";
import Button from "./Button";

function Tile({ info, table }: TileProps) {
  const { key, url, label } = info;

  return table === true ? (
    <Cell>
      <Link id={key} href={url} data-testid="Tile">
        <Logo src={require("../assets/images/" + key + ".svg")} alt={label} />
      </Link>
    </Cell>
  ) : (
    <Link id={key} href={url}>
      <Logo src={require("../assets/images/" + key + ".svg")} alt={label} />
    </Link>
  )
}

export default function Skills({ content }: SkillsProps) {
  const skillList = content?.subSection?.skills || [];

  const generateTiles = (tiles: SkillsContent[] | undefined, table: boolean = true) => {
    const content = tiles ? tiles : []
    return content.map((item, index) => <Tile key={`Tile ${index + 1}`} info={item} table={table} />)
  }

  if( skillList && skillList.length < 9) {
    return null;
  }

  return (
    <Section wide center label={content?.label}>
      <Mobile data-testid="Mobile">
        <Title data-testid="Title">{content?.title}</Title>
        <Marquee loop={0}>
          {generateTiles(content?.subSection?.skills, false)}
        </Marquee>
        <Description data-testid="Description">
          <Paragraph key={"Paragraph"}>{content?.description && content.description[0]}</Paragraph>
        </Description>
        <Button url="#contact" label="Let's Talk"/>
      </Mobile>
      <NotMobile data-testid="NotMobile">
        <Mosaic>
          <tbody>
            <tr data-testid="Row 1">
              <Cell colSpan={3} first>
                <Title data-testid="Title">{content?.title}</Title>
              </Cell>
              {generateTiles(skillList.slice(0, 2))}
            </tr>
            <tr data-testid="Row 2">
              {generateTiles(skillList.slice(2, 7))}
            </tr>
            <tr data-testid="Row 3">
              {generateTiles(skillList.slice(7, 9))}
              <Cell colSpan={3} last>
                <Content desktop>
                  <Description data-testid="Description">
                    <Paragraph key={"Paragraph"}>{content?.description && content.description[0]}</Paragraph>
                  </Description>
                  <Button url="#contact" label="Let's Talk"/>
                </Content>
              </Cell>
            </tr>
          </tbody>
        </Mosaic>
        <Content>
          <Description>
            {content?.description?.map((paragraph, index) => {
              return <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>
            })}
          </Description>
          <Button url="#contact" label="Let's Talk"/>
        </Content>
      </NotMobile>
    </Section>
  )

}