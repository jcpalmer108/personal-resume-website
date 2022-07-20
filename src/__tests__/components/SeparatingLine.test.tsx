import { render, screen } from "@testing-library/react";
import SeparatingLine from "../../components/SeparatingLine"

describe('SeparatingLine', () => {
  test('renders if optional params are passed in', () => {
    render(<SeparatingLine light thin />)
    expect(screen.getByTestId("Line")).toMatchSnapshot()
  })

  test('renders if optional params are not passed in', () => {
    render(<SeparatingLine />)
    expect(screen.getByTestId("Line")).toMatchSnapshot()
  })
})
