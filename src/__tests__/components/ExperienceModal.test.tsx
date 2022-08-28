import { render, screen } from "@testing-library/react";
import ExperienceModal from "../../components/ExperienceModal";
import { DetailsProps } from "../../types/Details";
import { ModalProps } from "../../types/Modal";
import { ProjectProps } from "../../types/Project";

// mock components
const mockDetails = jest.fn();
jest.mock("../../components/Details", () => ({ label, info }: DetailsProps) => {
  mockDetails(label, info);
  return <div />;
});

const mockProject = jest.fn();
jest.mock(
  "../../components/Project",
  () =>
    ({ icon, industry, description, title }: ProjectProps) => {
      mockProject(icon, industry, description, title);
      return <div />;
    }
);

const mockModal = jest.fn();
jest.mock(
  "../../components/Modal",
  () =>
    ({ closeModal, children }: ModalProps) => {
      mockModal(closeModal, children);
      return <div>{children}</div>;
    }
);

// params needed for component
const params = {
  required: {
    closeModal: jest.fn(),
    content: {
      title: "test title",
      employer: "test employer",
      location: "test location",
      description: ["1", "2"],
      icon: "nike",
      timeline: {
        start: "start date",
        end: "end date",
      },
    },
  },
  optional: {
    content: {
      team: "test team",
      organization: "test org",
      projects: [
        {
          icon: "project icon 1",
          industry: "project industry 1",
          description: ["project 1 desc 1", "project 1 desc 2"],
          title: "project title 1",
        },
        {
          icon: "project icon 2",
          industry: "project industry 2",
          description: ["project 2 desc 1", "project 2 desc 2"],
          title: "project title 2",
        },
      ],
    },
  },
};

describe("ExperienceModal", () => {
  test("renders if optional and required params are passed in", () => {
    // given
    const { required, optional } = params;
    const completeContent = { ...required.content, ...optional.content };
    render(
      <ExperienceModal
        closeModal={required.closeModal}
        content={completeContent}
      />
    );

    // then
    expect(screen.getByTestId("ExperienceModal")).toMatchSnapshot();
    expect(screen.getByTestId("Title")).toHaveTextContent(
      required.content.title
    );
    expect(screen.getByTestId("Employer")).toHaveTextContent(
      required.content.employer
    );
    expect(mockDetails).toHaveBeenCalledTimes(6);
    expect(mockDetails).toHaveBeenNthCalledWith(
      1,
      "Description",
      required.content.description
    );
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Organization", [
      optional.content.organization,
    ]);
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Team", [
      optional.content.team,
    ]);

    expect(mockProject).toHaveBeenCalledTimes(2);
    new Array(2).forEach((index) => {
      expect(mockProject).toHaveBeenNthCalledWith(
        index + 1,
        optional.content.projects[index].icon,
        optional.content.projects[index].industry,
        optional.content.projects[index].description,
        optional.content.projects[index].title
      );
    });
  });

  test("renders if only required params are passed in", () => {
    // given
    const { required } = params;
    render(
      <ExperienceModal
        closeModal={required.closeModal}
        content={required.content}
      />
    );

    // then
    expect(screen.getByTestId("ExperienceModal")).toMatchSnapshot();
    expect(screen.getByTestId("Title")).toHaveTextContent(
      required.content.title
    );
    expect(screen.getByTestId("Employer")).toHaveTextContent(
      required.content.employer
    );
    expect(mockDetails).toHaveBeenCalledTimes(3);
    expect(mockDetails).toHaveBeenNthCalledWith(
      1,
      "Description",
      required.content.description
    );
    expect(mockDetails).toHaveBeenNthCalledWith(2, "Location", [
      required.content.location,
    ]);
    expect(mockDetails).toHaveBeenNthCalledWith(3, "Timeline", [
      `${required.content.timeline.start} - ${required.content.timeline.end}`,
    ]);
    expect(mockProject).toHaveBeenCalledTimes(0);
  });
});
