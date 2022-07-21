import { render, screen } from "@testing-library/react";
import Button from "../../components/Button"

describe('Button', () => {
  test('renders if only required params are passed in', () => {
    render(<Button label="test" url="https://www.google.com" />)
    expect(screen.getByTestId("Button")).toMatchSnapshot()
  })
})
