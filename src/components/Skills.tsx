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
  Row,
  Cell
} from "../styles/components/Skills";
import Section from "../components/Section"
import { Skills as SkillsContent } from "../types/content"
import Marquee from "react-fast-marquee";
import Button from "./Button";

function Tile({ info }: TileProps) {
  const { key, url, label } = info;

  return (
    <Cell>
      <Link id={key} href={url}>
        <Logo src={require("../assets/images/" + key + ".svg")} alt={label} />
      </Link>
    </Cell>
  )
}

/*

TODO: get generateTiles function to generate the inserted tiles
to solve the desktop version
three rows
1 - title, generateRows(index 0 - 1)
2 - gneerateRows(index 2-7)
3 - generateRows(8-9), description, button

generateTiles param table regurgitates the tiles with a table cell tag


TODO: redo desktop view with table (more manipulatable and colspan use)
TODO: import react marquee
TODO: tablet version
TODO: desktop version

*/

export default function Skills({ content }: SkillsProps) {

  const generateTiles = (tiles: SkillsContent[] | undefined, table: boolean = false) => {
    const content = tiles ? tiles : []
    return content.map((item, index) => <Tile key={`Tile ${index + 1}`} info={item} />)
  }

  return (
    <Section wide center label={content?.label}>
      <Mobile>
        <Title>{content?.title}</Title>
        <Marquee loop={0}>
          {generateTiles(content?.subSection?.skills)}
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
          <Row>
            <Cell>
              <Title id="title">{content?.title}</Title>
            </Cell>
            {generateTiles(content?.subSection?.skills?.slice(0, 2))}
          </Row>
          <Row>
            {generateTiles(content?.subSection?.skills?.slice(2, 7))}
          </Row>
          <Row>
           {generateTiles(content?.subSection?.skills?.slice(7, 9))}
            <Cell id="action">
              <Description>
                {content?.description?.map((paragraph, index) => {
                  return <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>
                })}
              </Description>
              <Button url="#contact" label="Let's Talk"/>
            </Cell>
          </Row>
        </Mosaic>
      </NotMobile>
    </Section>
  )

}