import { 
  SkillsProps, 
  TileProps,
  DescriptionAndActionProps,
  TitleProps
} from "../types/Skills";
import { 
  Mobile,
  NotMobile,
  Title,
  Link,
  Logo,
  Description,
  Mosaic,
  Cell,
  Content,
  ButtonWrapper
} from "../styles/components/Skills";
import Section from "../components/Section"
import { Skill as SkillsContent } from "../types/content"
import Marquee from "react-fast-marquee";
import Button from "./Button";
import { useState } from "react";
import SkillsModal from "./SkillsModal"

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

function DescriptionAndAction({ openModal, description }: DescriptionAndActionProps) {
  return (
    <>
      <Description data-testid="Description">{description}</Description>
      <ButtonWrapper>
        <Button onClick={() => openModal()} label="Let's Talk"/>
      </ButtonWrapper>
    </>
  )
}

function TitleLine({ title }: TitleProps) {
  return <Title data-testid="Title">{title}</Title>
}

export default function Skills({ content }: SkillsProps) {
  console.log('hi there', content?.subSection)


  const skillList = content?.subSection?.skills?.data.filter(item => item.url && item.category !== 'soft-skills');



  const title = content?.title
  const description = (content?.description && content?.description[0]) || ''
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const generateTiles = (tiles: SkillsContent[] | undefined, table: boolean = true) => {
    const content = tiles ? tiles : []
    return content.map((item, index) => <Tile key={`Tile ${index + 1}`} info={item} table={table} />)
  }

  if( skillList && skillList.length < 9) {
    return null;
  }

  return (
    <div id="skills">
      {modalIsOpen && (<SkillsModal closeModal={() => setModalIsOpen(!modalIsOpen)} content={content?.subSection?.skills?.data} />)}
      <Section wide center label={content?.label}>
        <Mobile data-testid="Mobile">
          <TitleLine title={title || ''} />
          <Marquee loop={0}>
            {generateTiles(skillList, false)}
          </Marquee>
          <DescriptionAndAction description={description || ''} openModal={() => setModalIsOpen(true)}/>
        </Mobile>
        <NotMobile data-testid="NotMobile">
          <Mosaic>
            <tbody>
              <tr data-testid="Row 1">
                <Cell colSpan={3} first>
                  <TitleLine title={content?.title || ''} />
                </Cell>
                {generateTiles(skillList?.slice(0, 2))}
              </tr>
              <tr data-testid="Row 2">
                {generateTiles(skillList?.slice(2, 7))}
              </tr>
              <tr data-testid="Row 3">
                {generateTiles(skillList?.slice(7, 9))}
                <Cell colSpan={3} last>
                  <Content desktop>
                    <DescriptionAndAction description={description || ''} openModal={() => setModalIsOpen(true)}/>
                  </Content>
                </Cell>
              </tr>
            </tbody>
          </Mosaic>
          <Content>
            <DescriptionAndAction description={description || ''} openModal={() => setModalIsOpen(true)}/>
          </Content>
        </NotMobile>
      </Section>
    </div>
  )

}