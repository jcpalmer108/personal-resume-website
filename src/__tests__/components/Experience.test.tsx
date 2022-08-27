import { render, screen } from "@testing-library/react";
import Experience from "../../components/Experience";
import { ExperienceModalProps } from "../../types/ExperienceModal";

// mock components
const mockSection = jest.fn();
jest.mock(
  "../../components/Section",
  () =>
    ({
      label,
      children,
      light,
      thin,
      wide,
      center,
      bottom,
      noTop,
      noBorder,
    }: SectionProps) => {
      mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
      return <div>{children}</div>;
    }
);

const mockExperienceModal = jest.fn();
jest.mock(
  "../../components/ExperienceModal",
  () =>
    ({ closeModal, content }: ExperienceModalProps) => {
      mockExperienceModal(closeModal, content);
      return <div />;
    }
);

// params needed for component
const params = {
  required: {
    content: {
      key: "experience",
      label: "Experience",
      title: "Test title",
      description: ["test description"],
      inMenu: true,
      subSection: {
        experience: [
          {
            title: "test title 1",
            employer: "test Company 1",
            location: "test location 1",
            description: ["test desc 1"],
            icon: "test",
            timeline: {
              start: "test start 1",
              end: "test end 1",
            },
            projects: [
              {
                industry: "industry 1",
                title: "title project 1",
                description: ["desc 1"],
                icon: "test",
              },
              {
                industry: "industry 2",
                title: "title project 2",
                description: ["desc 2"],
                icon: "test",
              },
            ],
          },
          {
            title: "test title 2",
            employer: "test company 2",
            team: "test team",
            organization: "test organization",
            location: "test location 2",
            description: ["test desc 2"],
            icon: "test",
            timeline: {
              start: "test start 1",
              end: "test end 2",
            },
          },
        ],
      },
    },
    contact: {
      email: "test@email.com",
      cell: "1112223333",
    },
  },
};

describe("Experience", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { content, contact } = params.required;
    render(<Experience content={content} contact={contact} />);

    //then
    expect(screen.getByTestId("Experience")).toMatchSnapshot();
    expect(screen.getByTestId("Title")).toHaveTextContent(content.title);
    content.description.forEach((paragraph, index) => {
      expect(
        screen.getByTestId("Description").childNodes[index]
      ).toHaveTextContent(paragraph);
    });
    expect(screen.getByTestId("Call")).toBeTruthy();
    expect(screen.getByTestId("Call")).toHaveAttribute(
      "href",
      `tel:${contact.cell}`
    );
    expect(screen.getByTestId("Email")).toBeTruthy();
    expect(screen.getByTestId("Email")).toHaveAttribute(
      "href",
      `mailto:${contact.email}`
    );

    content.subSection.experience.forEach((job, index) => {
      expect(screen.getByTestId(`Title ${index + 1}`)).toHaveTextContent(
        job.title
      );
      expect(screen.getByTestId(`Info ${index + 1}`)).toHaveTextContent(
        job.employer + " / " + job.timeline.start + " - " + job.timeline.end
      );
      expect(screen.getByTestId(`Details ${index + 1}`)).toHaveTextContent(
        job.description[0] + "... Read More"
      );
      expect(screen.getAllByRole("img", { name: job.icon })).toHaveLength(2);
    });
  });

  test("does not render if content or contact is not defined", () => {
    // given
    render(<Experience content={undefined} contact={undefined} />);

    // then
    expect(screen.queryByTestId("Experience")).toBeFalsy();
  });
});
