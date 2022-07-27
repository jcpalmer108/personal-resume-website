import { render, screen } from "@testing-library/react"
import Experience from "../../components/Experience"

const params = {
  key: "experience",
  label: "Experience",
  title: "Test title",
  description: [
    "test description"
  ],
  inMenu: true,
  subSection: {
    experience: [
      {
        title: "test title 1",
        employer: "test Company 1",
        location: "test location 1",
        description: [
          "test desc 1"
        ],
        icon: "call-me",
        timeline: {
          start: "test start 1",
          end: "test end 1"
        },
        projects: [
          {
            industry: "industry 1",
            title: "title project 1",
            description: [
              "desc 1"
            ],
            icon: "icon 1"
          
          },
          {
            industry: "industry 2",
            title: "title project 2",
            description: [
              "desc 2"
            ],
            icon: "icon 2"
          
          }
        ]
      },
      {
        title: "test title 2",
        employer: "test company 2",
        team: "test team",
        organization: "test organization",
        location: "test location 2",
        description: [
          "test desc 2"
        ],
        icon: "email-me",
        timeline: {
          start: "test start 1",
          end: "test end 2"
        },
      },
    ]
  }
}

describe("Experience", () => {
  test("renders if only required params are passed in", () => {
    render(<Experience content={params} />)

    expect(screen.getByTestId("Experience")).toMatchSnapshot()
    expect(screen.getByTestId("Title")).toHaveTextContent(params.title)
    params.description.forEach((paragraph, index) => {
      expect(screen.getByTestId("Description").childNodes[index]).toHaveTextContent(paragraph)
    })
    expect(screen.getByTestId("Call")).toBeTruthy()
    expect(screen.getByTestId("Call")).toHaveAttribute(
      "href",
      "tel:3142212451"
    )
    expect(screen.getByTestId("Email")).toBeTruthy()
    expect(screen.getByTestId("Email")).toHaveAttribute(
      "href",
      "mailto:jenna@jennapalmer.info"
    )

    params.subSection.experience.forEach((job, index) => {
      expect(screen.getByTestId(`Title ${index + 1}`)).toHaveTextContent(job.title)
      expect(screen.getByTestId(`Info ${index + 1}`)).toHaveTextContent(job.employer + " / " + job.timeline.start + " - " + job.timeline.end)
      expect(screen.getByTestId(`Details ${index + 1}`)).toHaveTextContent(job.description[0] + "... Read More")
      expect(screen.getByRole('img', { name: job.icon })).toBeTruthy()
    })

  })

})