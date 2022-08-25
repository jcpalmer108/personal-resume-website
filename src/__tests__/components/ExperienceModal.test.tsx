import { render, screen } from "@testing-library/react";
import Modal from "../../components/Modal"
import { DetailsProps } from "../../types/Details";
import { ProjectProps } from "../../types/Project";
import { ModalProps } from "../../types/Modal";

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

const mockModal = jest.fn();
jest.mock("../../components/Modal", () => ({ closeModal, children }: ModalProps) => {
  mockModal(closeModal, children);
  return <div>{children}</div>;
});


describe('ExperienceModal', () => {
  const closeModal = jest.fn()
  const params = {
    closeModal: jest.fn(),
    required: {
      title: 'test title',
      employer: 'test employer',
      location: 'test location',
      description: [ '1', '2' ],
      icon: 'nike',
      timeline: {
        start: 'start date',
        end: 'end date'
      }
    },
    optional: {
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
  }

  test('renders if optional and required params are passed in', () => {
    render(<Modal closeModal={closeModal} content={{ ...params.required, ...params.optional }} />)
    expect(screen.getByTestId("Inner")).toMatchSnapshot()
    expect(screen.getByTestId("Title")).toHaveTextContent(params.required.title)
    expect(screen.getByTestId("Employer")).toHaveTextContent(params.required.employer)
    
    expect(mockDetails).toHaveBeenCalledTimes(6)
    expect(mockDetails).toHaveBeenNthCalledWith(1, "Description", params.required.description)
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Organization", [params.optional.organization])
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Team", [params.optional.team])
    
    expect(mockProject).toHaveBeenCalledTimes(2)
    new Array(2).forEach((index) => {
      expect(mockProject).toHaveBeenNthCalledWith(index + 1, 
        params.optional.projects[index].icon,
        params.optional.projects[index].industry,
        params.optional.projects[index].description,
        params.optional.projects[index].title
      )
    })
  })

  test('renders if only required params are passed in', () => {
    render(<Modal closeModal={closeModal} content={{ ...params.required }} />)
    expect(screen.getByTestId("Inner")).toMatchSnapshot()
    expect(screen.getByTestId("Title")).toHaveTextContent(params.required.title)
    expect(screen.getByTestId("Employer")).toHaveTextContent(params.required.employer)
    
    expect(mockDetails).toHaveBeenCalledTimes(3)
    expect(mockDetails).toHaveBeenNthCalledWith(1, "Description", params.required.description)
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Location", [params.required.location])
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Timeline", [ `${params.required.timeline.start} - ${params.required.timeline.end}` ])

    expect(mockProject).toHaveBeenCalledTimes(0)
  })

})
