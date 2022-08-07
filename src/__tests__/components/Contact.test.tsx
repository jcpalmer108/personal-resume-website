import { render, screen } from "@testing-library/react";
import Contact from "../../components/Contact"
import userEvent from '@testing-library/user-event';

describe('Contact', () => {
  const params = {
    contact: {
      email: "jenna@jennapalmer.info",
      cell: "3142212451"    
    },
    content: {
      key: "contact",
      label: "test label",
      title: "test title",
      inMenu: true,
      description: [
        "test description"
      ]  
    },
    inputs: [
      {
        key: "Name",
        value: "Jane Doe"
      },
      {
        key: "Email",
        value: "test@email.com"
      },
      {
        key: "Phone",
        value: "1112223333"
      },
      {
        key: "Message",
        value: "test one two three"

      }
    ]
  }
  
  test('renders if only required params are passed in', () => {
    render(<Contact content={params.content} contact={params.contact} />)
    expect(screen.getByTestId("Mobile")).toMatchSnapshot()
    expect(screen.getByTestId("NotMobile")).toMatchSnapshot()

    screen.getAllByTestId('Title').forEach((title) => {
      expect(title).toHaveTextContent(params.content.title)
    })

    screen.getAllByTestId('Description').forEach((desc) => {
      expect(desc).toHaveTextContent(params.content.description[0])
    })

    expect(screen.getAllByTestId('Input')).toHaveLength(8)
    expect(screen.getAllByTestId('Links')).toHaveLength(5)

    // Mobile Inputs
    expect(screen.getAllByTestId('Input')[0]).toHaveTextContent("NAME")
    expect(screen.getAllByTestId('Input')[1]).toHaveTextContent("PHONE")
    expect(screen.getAllByTestId('Input')[2]).toHaveTextContent("EMAIL")
    expect(screen.getAllByTestId('Input')[3]).toHaveTextContent("MESSAGE")

    // NotMobile Inputs
    expect(screen.getAllByTestId('Input')[4]).toHaveTextContent("NAME")
    expect(screen.getAllByTestId('Input')[5]).toHaveTextContent("PHONE")
    expect(screen.getAllByTestId('Input')[6]).toHaveTextContent("EMAIL")
    expect(screen.getAllByTestId('Input')[7]).toHaveTextContent("MESSAGE")
  })

  params.inputs.forEach((testCase, index) => {
    test(`${testCase.key.toLowerCase()} input updates field with new data`, () => {
      render(<Contact content={params.content} contact={params.contact} />)
      const inputField = screen.getAllByTestId("Input")
      const MobileInput = inputField[index].children[0]
      const NotMobileInput = inputField[index + 4].children[0]
  
      userEvent.type(MobileInput, testCase.value);
  
      expect(MobileInput).toHaveValue(testCase.value)
      expect(NotMobileInput).toHaveValue(testCase.value)  
    })
  })

  test('submit button is disabled unless all values are completed', () => {
    render(<Contact content={params.content} contact={params.contact} />)
    const button = screen.getAllByTestId("Submit");
    const inputField = screen.getAllByTestId("Input")

    expect(button[0]).toHaveProperty('disabled', true) 
    
    userEvent.type(inputField[0].children[0], "test");
    expect(button[0]).toHaveProperty('disabled', true) 

    userEvent.type(inputField[1].children[0], "test");
    expect(button[0]).toHaveProperty('disabled', true) 

    userEvent.type(inputField[2].children[0], "test");
    expect(button[0]).toHaveProperty('disabled', true) 

    userEvent.type(inputField[3].children[0], "test");
    expect(button[0]).toHaveProperty('disabled', false) 
  })

  test('submit button opens a mailto link with form data filled out', () => {
    const spyWindowOpen = jest.spyOn(window, 'open');
    spyWindowOpen.mockImplementation(jest.fn());

    render(<Contact content={params.content} contact={params.contact} />)
    const button = screen.getAllByTestId("Submit");
    const inputField = screen.getAllByTestId("Input")
    
    userEvent.type(inputField[0].children[0], "test");
    userEvent.type(inputField[1].children[0], "test");
    userEvent.type(inputField[2].children[0], "test");
    userEvent.type(inputField[3].children[0], "test");
    userEvent.click(button[0])

    expect(spyWindowOpen).toHaveBeenCalled()
    expect(spyWindowOpen).toHaveBeenCalledWith(
      'mailto:jenna@jennapalmer.info?subject=NEW:%20Website%20Response&body=Phone:%20test%0AEmail:%20test%0A%0AMessage:%20test',
      '_blank'
    )
  })
})
