import { useState } from "react";
import Marquee from "react-fast-marquee";
import Section from "../components/Section";
import {
  ButtonWrapper,
  Cell,
  Content,
  Description,
  Link,
  Logo,
  Mobile,
  Mosaic,
  NotMobile,
  Title,
} from "../styles/components/Skills";
import { Skill as SkillsContent } from "../types/content";
import {
  DescriptionAndActionProps,
  SkillsProps,
  TileProps,
  TitleProps,
} from "../types/Skills";
import Button from "./Button";
import SkillsModal from "./SkillsModal";

export default function Skills({ content }: SkillsProps) {
  const skillList = content?.subSection?.skills?.data.filter(
    (item) => item.url && item.category !== "soft-skills"
  );
  const title = content?.title;
  const description = (content?.description && content?.description[0]) || "";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const generateTiles = (
    tiles: SkillsContent[] | undefined,
    table: boolean = true
  ) => {
    const content = tiles ? tiles : [];
    return content.map((item, index) => (
      <Tile key={`Tile ${index + 1}`} info={item} table={table} />
    ));
  };

  if (skillList && skillList.length < 9) {
    return null;
  }

  return (
    <div id="skills">
      {modalIsOpen && (
        <SkillsModal
          closeModal={() => setModalIsOpen(!modalIsOpen)}
          content={content?.subSection?.skills?.data}
          categories={content?.subSection?.skills?.categories}
        />
      )}
      <Section wide center label={content?.label}>
        <Mobile data-testid="Mobile">
          <TitleLine title={title || ""} />
          <Marquee loop={0}>{generateTiles(skillList, false)}</Marquee>
          <DescriptionAndAction
            description={description || ""}
            openModal={() => setModalIsOpen(true)}
          />
        </Mobile>
        <NotMobile data-testid="NotMobile">
          <Mosaic>
            <tbody>
              <tr data-testid="Row 1">
                <Cell colSpan={3} first>
                  <TitleLine title={title || ""} />
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
                    <DescriptionAndAction
                      description={description || ""}
                      openModal={() => setModalIsOpen(true)}
                    />
                  </Content>
                </Cell>
              </tr>
            </tbody>
          </Mosaic>
          <Content>
            <DescriptionAndAction
              description={description || ""}
              openModal={() => setModalIsOpen(true)}
            />
          </Content>
        </NotMobile>
      </Section>
    </div>
  );
}

function Tile({ info, table }: TileProps) {
  const { key, url, label } = info;

  return table === true ? (
    <Cell>
      <Link id={key} href={url} data-testid="Tile">
        <Logo
          src={require("../assets/images/skills/section/" + key + ".svg")}
          alt={label}
        />
      </Link>
    </Cell>
  ) : (
    <Link id={key} href={url}>
      <Logo
        src={require("../assets/images/skills/section/" + key + ".svg")}
        alt={label}
      />
    </Link>
  );
}

function DescriptionAndAction({
  openModal,
  description,
}: DescriptionAndActionProps) {
  return (
    <>
      <Description data-testid="Description">{description}</Description>
      <ButtonWrapper>
        <Button onClick={() => openModal()} label="Let's Talk" />
      </ButtonWrapper>
    </>
  );
}

function TitleLine({ title }: TitleProps) {
  return <Title data-testid="Title">{title}</Title>;
}
