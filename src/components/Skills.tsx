import { SkillsProps, TileProps } from "../types/Skills";
import { 
  Mobile,
  Desktop,
  Marquee,
  Title,
  Link,
  Logo,
  // Row
} from "../styles/components/Skills";
import Section from "../components/Section"
import { Skills as SkillsContent } from "../types/content"


function Tile({ info }: TileProps) {
  const { key, url, label } = info;

  return (
    <Link id={key} href={url}>
      <Logo src={require("../assets/images/" + key + ".svg")} alt={label} />
    </Link>
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
  console.log(content)

  const generateTiles = (tiles: SkillsContent[] | undefined, table: boolean = false) => {
    const content = tiles ? tiles : []
    return table ? 
      content.map((item, index) => 
        <td>
          <Tile key={`Tile ${index + 1}`} info={item} />
        </td>
      ) : content.map((item, index) => <Tile key={`Tile ${index + 1}`} info={item} />)
  }


  
  return (
    <Section wide label={content?.label}>
      <Mobile>
        <Title>{content?.title}</Title>
        <Marquee>
          {generateTiles(content?.subSection?.skills)}
        </Marquee>
      </Mobile>
      <Desktop>

        {/* <Row>
          <Title>{content?.title}</Title>
          {
            content?.subSection?.skills?.slice(0, 1).map((item, index) => 
              <Tile key={`Tile ${index + 1}`} info={item} />
            )
          }
        </Row>
        <Row>
          {
            content?.subSection?.skills?.slice(2, 7).map((item, index) =>
              <Tile key={`Tile ${index + 1}`} info={item} />
            )

          }
        </Row>
        <Row>
          {
            content?.subSection?.skills?.slice(2, 7).map((item, index) => 
              <Tile key={`Tile ${index + 1}`} info={item} />
            )
          }
        </Row> */}
      </Desktop>
    </Section>
  )

}