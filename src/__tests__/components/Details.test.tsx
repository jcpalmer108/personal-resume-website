import { render, screen } from "@testing-library/react";
import Details from "../../components/Details"

describe('Details', () => {
  const params = {
    label: 'test label',
    info: [ '1', '2' ],
    noBottom: true,
  }

  test('renders if optional and required params are passed in', () => {
    render(<Details label={params.label} info={params.info} noBottom />)
    expect(screen.getByTestId("Details")).toMatchSnapshot()
    expect(screen.getByTestId("Label")).toHaveTextContent(params.label)
    expect(screen.getByTestId("Description")).toHaveTextContent(params.info.join(""))
  })

  test('renders if only required params are passed in', () => {
    render(<Details label={params.label} info={params.info} />)
    expect(screen.getByTestId("Details")).toMatchSnapshot()
    expect(screen.getByTestId("Label")).toHaveTextContent(params.label)
    expect(screen.getByTestId("Description")).toHaveTextContent(params.info.join(""))
  })
})
