import { render, screen } from "@testing-library/react";
import Project from "../../components/Project"

describe('Project', () => {
  const params = {
    icon: 'test',
    industry: 'test industry',
    title: 'test title',
    description: [ '1', '2' ]
  }

  test('renders if optional and required params are passed in', () => {
    render(<Project icon={params.icon} industry={params.industry} title={params.title} description={params.description}/>)
    expect(screen.getByTestId("Project")).toMatchSnapshot()
    expect(screen.getByTestId("Icon")).toBeTruthy()
    expect(screen.getByTestId("Title")).toHaveTextContent(params.title)
    expect(screen.getByTestId("Industry")).toHaveTextContent(params.industry)
    expect(screen.getByTestId("Description")).toHaveTextContent(params.description.join(""))

  })
})
