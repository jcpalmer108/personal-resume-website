import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../../components/Input"

// params for component
describe('Input', () => {
  const params = {
    label: 'test label',
    value: 'test value',
    updateForm: jest.fn(),
  }
  test('renders if optional and required params are passed in', () => {
    render(<Input label={params.label} value={params.value} updateForm={params.updateForm} area noBorder/>)
    expect(screen.getByTestId("Input")).toMatchSnapshot()
    expect(screen.getByTestId("Input").firstChild.nodeName).toBe('TEXTAREA')
    expect(screen.getByTestId("Input").lastChild.nodeName).toBe('LABEL')
    expect(screen.getByTestId("Input").lastChild).toHaveTextContent(params.label.toUpperCase())
  })

  test('renders if only required params are passed in', () => {
    render(<Input label={params.label} value={params.value} updateForm={params.updateForm}/>)
    expect(screen.getByTestId("Input")).toMatchSnapshot()
    expect(screen.getByTestId("Input").firstChild.nodeName).toBe('INPUT')
    expect(screen.getByTestId("Input").lastChild.nodeName).toBe('LABEL')
    expect(screen.getByTestId("Input").lastChild).toHaveTextContent(params.label.toUpperCase())
  })

  test('updateForm should be called on input update', () => {
    render(<Input label={params.label} value={params.value} updateForm={params.updateForm}/>)
    const inputField = screen.getByTestId("Input")
    userEvent.type(inputField.children[0], "test");
    expect(params.updateForm).toHaveBeenCalledTimes(4); // one call for each letter input
  })

})
