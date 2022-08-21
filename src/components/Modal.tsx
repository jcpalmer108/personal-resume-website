import { Experience } from "../types/content"
import { 
  Window, 
  BackgroundOverlay, 
  InnerWindow, 
  CloseIcon,
  LeftRightBorders,
  TopBottomBorders,
  Content,
  Circle,
  Logo,
  Tile,
  Overview,
  TileLabel,
  TileInfo,
  BodyLabel,
  BodyInfo,
  Body
} from "../styles/components/Modal";
import closeIcon from "../assets/images/close.svg"

type ModalProps = {
  closeModal: Function
  content?: Experience;
}

export default function Modal({ closeModal, content }: ModalProps) {
  console.log('!', content)
  return (
    <>
      <BackgroundOverlay onClick={() => closeModal()} />
      <Window>
        <CloseIcon src={closeIcon} alt="close" onClick={() => closeModal()}/>
        <InnerWindow>
          <LeftRightBorders>
            <TopBottomBorders>
              <Content>
                <Tile>
                  <Circle>
                    <Logo src={require(`../assets/images/${content?.icon || "nike"}-white.svg`)} alt="logo"/>
                  </Circle>
                  <Overview>
                    <div>
                      <TileLabel>Title</TileLabel>
                      <TileInfo>{content?.title}</TileInfo>
                    </div>
                    <div>
                      <TileLabel>Employer</TileLabel>
                      <TileInfo>{content?.employer}</TileInfo>
                    </div>
                  </Overview>
                </Tile>
                <Body>
                  <div>
                    <BodyLabel>Description</BodyLabel>
                    <BodyInfo>{content?.description}</BodyInfo>
                  </div>
                  {
                    content?.organization && (
                      <div>
                        <BodyLabel>Organization</BodyLabel>
                        <BodyInfo>{content?.organization}</BodyInfo>
                      </div>
                    )
                  }
                  {
                    content?.team && (
                      <div>
                        <BodyLabel>Team</BodyLabel>
                        <BodyInfo>{content?.team}</BodyInfo>
                      </div>
                    )
                  }
                  <div>
                    <BodyLabel>Location</BodyLabel>
                    <BodyInfo>{content?.location}</BodyInfo>
                  </div>
                  <div>
                    <BodyLabel>Timeline</BodyLabel>
                    <BodyInfo>{content?.timeline.start} - {content?.timeline.end}</BodyInfo>
                  </div>
                  {
                    content?.projects && content.projects.map((project) => (
                      <>
                        <BodyLabel>{project.title}</BodyLabel>
                        <BodyInfo>{project.description}</BodyInfo>
                      </>
                    ))
                  }
                </Body>

              </Content>
            </TopBottomBorders>
          </LeftRightBorders>
        </InnerWindow>
      </Window>
    </>
  )
}