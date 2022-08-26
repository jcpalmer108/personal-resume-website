import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button"

// mock content

// mock components

// params needed for component
const params = {
  required: {
    label: 'test'
  },
  optional: {
    url: 'www.google.com',
    onClick: jest.fn()
  }
}

describe('Button', () => {
  test('renders if required and optional params are passed in', () => {
    // given
    const { required, optional } = params;
    const upperCaseLabel = required.label.toUpperCase();
    render(<Button label={required.label} url={optional.url} onClick={optional.onClick}/>)

    // then
    expect(screen.getByTestId("Button")).toMatchSnapshot()
    expect(screen.getByRole('link', { name: `${upperCaseLabel} arrow` })).toHaveAttribute('href', optional.url)
    expect(screen.getByTestId("Button")).toHaveTextContent(upperCaseLabel)
    expect(screen.getByRole('img', { name: 'arrow' })).toHaveAttribute('src', 'arrow-right.svg')
  })

  test('renders if only required params are passed in', () => {
    // given
    const { required } = params;
    const upperCaseLabel = required.label.toUpperCase();
    render(<Button label={required.label} />)

    // then
    expect(screen.getByTestId("Button")).toMatchSnapshot()
    expect(screen.queryByRole('link', { name: `${upperCaseLabel} arrow` })).toBeFalsy()
    expect(screen.getByTestId("Button")).toHaveTextContent(upperCaseLabel)
    expect(screen.getByRole('img', { name: 'arrow' })).toHaveAttribute('src', 'arrow-right.svg')
  })

  test('executes onClick function when component is clicked', () => {
    // given
    const { required, optional } = params;
    render(<Button label={required.label} onClick={optional.onClick}/>)

    // when
    fireEvent.click(screen.getByTestId("Button"))

    // then
    expect(optional.onClick).toHaveBeenCalledTimes(1)
  })
})
