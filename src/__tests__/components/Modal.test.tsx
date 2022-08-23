import { render, screen } from "@testing-library/react";
import Modal from "../../components/Modal"
import { DetailsProps } from "../../types/Details";
import { ProjectProps } from "../../types/Project";

const mockDetails = jest.fn();
jest.mock("../../components/Details", () => ({ label, info }: DetailsProps) => {
  mockDetails(label, info);
  return <div />;
});

const mockProject = jest.fn();
jest.mock("../../components/Project", () => ({ icon, industry, description, title }: ProjectProps) => {
  mockProject(icon, industry, description, title);
  return <div />;
});


describe('Modal', () => {
  const closeModal = jest.fn()
  const reqContent = {
    title: 'test title',
    employer: 'test employer',
    location: 'test location',
    description: [ '1', '2' ],
    icon: 'nike',
    timeline: {
      start: 'start date',
      end: 'end date'
    }
  }
  const optContent = {
    team: 'test team',
    organization: 'test org',
    projects: [
      {
        icon: 'project icon 1',
        industry: 'project industry 1',
        description: [ 'project 1 desc 1', 'project 1 desc 2' ],
        title: 'project title 1'
      },
      {
        icon: 'project icon 2',
        industry: 'project industry 2',
        description: [ 'project 2 desc 1', 'project 2 desc 2' ],
        title: 'project title 2'
      }
    ]
  }

  test('renders if optional and required params are passed in', () => {
    render(<Modal closeModal={closeModal} content={{ ...reqContent, ...optContent }} />)
    expect(screen.getByTestId("Inner")).toMatchSnapshot()
    expect(screen.getByTestId("Title")).toHaveTextContent(reqContent.title)
    expect(screen.getByTestId("Employer")).toHaveTextContent(reqContent.employer)
    
    expect(mockDetails).toHaveBeenCalledTimes(6)
    expect(mockDetails).toHaveBeenNthCalledWith(1, "Description", reqContent.description)
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Organization", [optContent.organization])
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Team", [optContent.team])
    
    expect(mockProject).toHaveBeenCalledTimes(2)
    new Array(2).forEach((index) => {
      expect(mockProject).toHaveBeenNthCalledWith(index + 1, 
        optContent.projects[index].icon,
        optContent.projects[index].industry,
        optContent.projects[index].description,
        optContent.projects[index].title
      )
    })
  })

  test('renders if only required params are passed in', () => {
    render(<Modal closeModal={closeModal} content={{ ...reqContent }} />)
    expect(screen.getByTestId("Inner")).toMatchSnapshot()
    expect(screen.getByTestId("Title")).toHaveTextContent(reqContent.title)
    expect(screen.getByTestId("Employer")).toHaveTextContent(reqContent.employer)
    
    expect(mockDetails).toHaveBeenCalledTimes(3)
    expect(mockDetails).toHaveBeenNthCalledWith(1, "Description", reqContent.description)
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Location", [reqContent.location])
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Timeline", [ `${reqContent.timeline.start} - ${reqContent.timeline.end}` ])

    expect(mockProject).toHaveBeenCalledTimes(0)
  })

})
