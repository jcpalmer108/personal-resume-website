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
      <Link id={key} href={url}>
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

  const generateTiles = (tiles: SkillsContent[] | undefined, table: boolean = true) => {
    const content = tiles ? tiles : []
    return content.map((item, index) => <Tile key={`Tile ${index + 1}`} info={item} table={table} />)
  }

  return (
    <Section wide center label={content?.label}>
      <Mobile>
        <Title>{content?.title}</Title>
        <Marquee loop={0}>
          {generateTiles(content?.subSection?.skills, false)}
        </Marquee>
        <Description>
          {content?.description?.map((paragraph, index) => {
            return <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>
          })}
        </Description>
        <Button url="#contact" label="Let's Talk"/>
      </Mobile>
      <NotMobile>
        <Mosaic>
          <tbody>
            <tr>
              <Cell colSpan={3} first>
                <Title id="title">{content?.title}</Title>
              </Cell>
              {generateTiles(content?.subSection?.skills?.slice(0, 2))}
            </tr>
            <tr>
              {generateTiles(content?.subSection?.skills?.slice(2, 7))}
            </tr>
            <tr>
              {generateTiles(content?.subSection?.skills?.slice(7, 9))}
              <Cell colSpan={3} last>
                <Content desktop>
                  <Description>
                    {content?.description?.map((paragraph, index) => {
                      return <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>
                    })}
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