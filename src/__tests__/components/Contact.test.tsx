import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../../components/Contact"
import { InputProps } from "../../types/Input"
// import socials from "../assets/content/socials.json";

// mock content
jest.mock('../../assets/content/socials.json', ()=>({
  links: [
    {
      key: "github",
      label: "Github",
      url: "https://www.github.com/jcpalmer108/"
    },
    {
      key: "leetcode",
      label: "Leetcode",
      url: "https://leetcode.com/darthToaster/"
    }
  ]
}), { virtual: true })

// mock components & spies
const mockSection = jest.fn();
jest.mock("../../components/Section", () => ({ label, children, light, thin, wide, center, bottom, noTop, noBorder }: SectionProps) => {
  mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
  return <div>{children}</div>;
});

const mockInput = jest.fn();
jest.mock("../../components/Input", () => ({ label, value, updateForm, area, noBorder }: InputProps) => {
  mockInput(label, value, area, noBorder);
  return <div />;
});

const spyWindowOpen = jest.spyOn(window, 'open');
spyWindowOpen.mockImplementation(jest.fn());

// params needed for component
const params = {
  required: {
    contact: {
      email: "jenna@jennapalmer.info",
      cell: "3142212451"    
    }
  },
  optional: {
    content: {
      key: "contact",
      label: "test label",
      title: "test title",
      inMenu: true,
      description: [
        "test description"
      ]  
    },
    formValues: {
      name: 'Jane Doe',
      phone: '1112223333',
      email: 'test@test.com',
      message: 'Hi there, I want to hire you!'
    }
  }
}

describe('Contact', () => {  
  test('renders if content and contact are passed in', () => {
    // given
    const { required, optional } = params;
    render(<Contact content={optional.content} contact={required.contact} />)

    // then
    expect(screen.getByTestId("Mobile")).toMatchSnapshot()
    expect(screen.getByTestId('Mobile')).toHaveTextContent(optional.content.title)
    expect(screen.getByTestId('Mobile')).toHaveTextContent(optional.content.description[0])

    expect(screen.getByTestId("NotMobile")).toMatchSnapshot()
    expect(screen.getByTestId('NotMobile')).toHaveTextContent(optional.content.title)
    expect(screen.getByTestId('NotMobile')).toHaveTextContent(optional.content.description[0])

    expect(screen.getByTestId("BlankSection")).toMatchSnapshot()

    expect(mockInput).toHaveBeenCalledTimes(8)
    expect(mockInput).toHaveBeenNthCalledWith(1, "Name", "", undefined, undefined)
    expect(mockInput).toHaveBeenNthCalledWith(2, "Phone", "", undefined, undefined)
    expect(mockInput).toHaveBeenNthCalledWith(3, "Email", "", undefined, undefined)
    expect(mockInput).toHaveBeenNthCalledWith(4, "Message", "", true, undefined)
    expect(mockInput).toHaveBeenNthCalledWith(5, "Name", "", undefined, true)
    expect(mockInput).toHaveBeenNthCalledWith(6, "Phone", "", undefined, true)
    expect(mockInput).toHaveBeenNthCalledWith(7, "Email", "", undefined, true)
    expect(mockInput).toHaveBeenNthCalledWith(8, "Message", "", true, true)
  
    expect(screen.getAllByTestId("Submit")[0]).toHaveProperty('disabled', true) 
  })

  test('does not render if only contact is passed in', () => {
    // given 
    const { required } = params;
    render(<Contact content={undefined} contact={required.contact} />)

    // then 
    expect(screen.queryByTestId('Contact')).toBeFalsy()
  })

  test('submit button is disabled unless all values are completed', () => {
    // given
    const { required, optional } = params;
    render(<Contact content={optional.content} contact={required.contact} formFieldValues={optional.formValues}/>)
    
    // then
    expect(screen.getAllByTestId("Submit")[0]).toHaveProperty('disabled', false) 
  })

  test('submit button opens a mailto link with form data filled out', () => {
    // given
    const { required, optional } = params;
    render(<Contact content={optional.content} contact={required.contact} formFieldValues={optional.formValues}/>)

    // when
    fireEvent.click(screen.getByRole("button", { name: 'SUBMIT'}))

    // then
    expect(spyWindowOpen).toHaveBeenCalled()
    expect(spyWindowOpen).toHaveBeenCalledWith(
      'mailto:jenna@jennapalmer.info?subject=NEW:%20Website%20Response&body=Phone:%201112223333%0AEmail:%20test@test.com%0A%0AMessage:%20Hi%20there,%20I%20want%20to%20hire%20you!',
      '_blank'
    )
  })
})
