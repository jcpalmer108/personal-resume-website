import { Experience } from "../types/content"
import { 
  Content,
  Circle,
  Logo,
  Tile,
  Overview,
  TileLabel,
  TileInfo,
  OrgTeam,
  JobDetails,
  Summary
} from "../styles/components/Modal";
import Details from "./Details"
import Project from "./Project"
import Modal from "./Modal"

type ExperienceModalProps = {
  closeModal: Function
  content?: Experience;
}

export default function ExperienceModal({ closeModal, content }: ExperienceModalProps) {
  const generateDetails = () => {
    let response = [];

    if(content?.description) response.push(
      <Details 
        key="Description"
        data-testid="Description" 
        label="Description" 
        info={content.description}
      />
    )

    if(content?.organization && content?.team) response.push(
      <OrgTeam key="OrgTeam">
        <Details 
          label="Organization" 
          info={[content.organization]} 
          data-testid="Organization" 
        />
        <Details 
          label="Team" 
          info={[content.team]} 
          noBottom 
          data-testid="Team" 
        />
      </OrgTeam>
    )

    if(content?.location) response.push(
      <Details 
        key="Location"
        label="Location" 
        info={[content.location]}
        data-testid="Location" 
      />
    )

    if(content?.timeline) response.push(
      <Details 
        key="Timeline"
        label="Timeline" 
        info={[`${content.timeline.start} - ${content.timeline.end}`]} 
        data-testid="Timeline" 
      />
    )
    
    if(content?.projects) {
      response.push(<Details key="Projects" label="Projects" data-testid="Projects" />)
      response.push(
      <div data-testid="ProjectLineItems">
        {
          content.projects.map(({icon, industry, description, title}, index) => 
            <Project 
              key={`Project ${index + 1}`}
              icon={icon} 
              industry={industry} 
              description={description} 
              title={title} 
              data-testid={`Project ${index + 1}`}
            />
          )
        }
      </div>)
    }

    return response
  }

  return (
    <>
      <Modal closeModal={closeModal}>
        <Content data-testid="Content">
          <Tile>
            <Circle>
              <Logo data-testid="Logo" src={require(`../assets/images/${content?.icon || "nike"}-white.svg`)} alt="logo" icon={content?.icon} />
            </Circle>
            <Overview>
              <Summary>
                <TileLabel>Title</TileLabel>
                <TileInfo data-testid="Title">{content?.title}</TileInfo>
              </Summary>
              <Summary>
                <TileLabel>Employer</TileLabel>
                <TileInfo data-testid="Employer">{content?.employer}</TileInfo>
              </Summary>
            </Overview>
          </Tile>
          <JobDetails>
            {generateDetails().map((item, index) => <div key={`Detail ${index + 1}`}>{item}</div>)}
          </JobDetails>
        </Content>
      </Modal>
    </>
  )
}