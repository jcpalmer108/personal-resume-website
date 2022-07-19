import { render, screen } from "@testing-library/react";
import SeparatingLine from "../../components/SeparatingLine"

describe('SeparatingLine', () => {
  test('Happy Path', () => {
    render(<SeparatingLine light thin />)
    expect(screen.getByTestId("Line")).toMatchSnapshot()
  })

  test('Un-Happy Path', () => {
    render(<SeparatingLine />)
    expect(screen.getByTestId("Line")).toMatchSnapshot()
  })
})
