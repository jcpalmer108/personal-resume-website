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
  Body
} from "../styles/components/Modal";
import closeIcon from "../assets/images/close.svg"
import Details from "./Details"
import Project from "./Project"

type ModalProps = {
  closeModal: Function
  content?: Experience;
}

export default function Modal({ closeModal, content }: ModalProps) {
  console.log('!', content)

  const generateDetails = () => {
    let response = [];

    if(content?.description) response.push(<Details label="Description" info={content.description}/>)
    if(content?.organization) response.push(<Details label="Organization" info={[content.organization]}/>)
    if(content?.team) response.push(<Details label="Team" info={[content.team]}/>)
    if(content?.location) response.push(<Details label="Location" info={[content.location]}/>)
    if(content?.timeline) response.push(<Details label="Timeline" info={[`${content.timeline.start} - ${content.timeline.end}`]} />)
    if(content?.projects) {
      response.push(<Details label="Projects" />)
      response.push(content.projects.map(({icon, industry, description, title}) => <Project icon={icon} industry={industry} description={description} title={title} />))
    }

    return response
  }

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
                    <Logo src={require(`../assets/images/${content?.icon || "nike"}-white.svg`)} alt="logo" icon={content?.icon} />
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
                  {generateDetails()}
                </Body>
              </Content>
            </TopBottomBorders>
          </LeftRightBorders>
        </InnerWindow>
      </Window>
    </>
  )
}