import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import socials from "../../assets/content/socials.json";
import About from '../../components/About';
import { SectionProps } from "../../types/Section";

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

// mock components
const mockSection = jest.fn();
jest.mock("../../components/Section", () => ({ label, children, light, thin, wide, center, bottom, noTop, noBorder }: SectionProps) => {
  mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
  return <div>{children}</div>;
});

// params needed for component
const params = {
  required: {
    key: "about",
    label: "About",
    inMenu: true,
    title: "test title",
    description: [
      "test contents 1",
      "test contents 2"
    ],
    subSection: {
      education: [
        {
          key: "webster",
          school: "Webster University",
          degree: "Bachelors of Science in Computer Science",
          timeline: {
            start: "2014",
            end: "2017"
          }
        },
        {
          key: "harvard",
          school: "Harvard University",
          degree: "Bachelors of Smartiness in Computer Science",
          timeline: {
            start: "2027",
            end: "2030"
          }
        }
      ]
    }  
  }
}

// tests
describe('About', () => {
  test('renders if only required params are passed in', () => {
    // given 
    const { required } = params;
    render(<About content={required} />)

    // then
    expect(screen.getByTestId('About')).toMatchSnapshot()
    expect(screen.getByTestId('About')).toHaveAttribute('id', 'about')
    
    expect(mockSection).toHaveBeenCalledTimes(3)
    expect(mockSection).toHaveBeenNthCalledWith(1, required.label, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    expect(mockSection).toHaveBeenNthCalledWith(2, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined)
    expect(mockSection).toHaveBeenNthCalledWith(3, undefined, undefined, undefined, true, undefined, true, undefined, undefined)

    expect(screen.getByTestId('Title')).toHaveTextContent(required.title)
    required.description.forEach((item, index) => { expect(screen.getByTestId(`Description ${index + 1}`)).toHaveTextContent(item) })
    expect(screen.getByTestId('Schooling').childNodes).toHaveLength(required.subSection.education.length + 1)
    required.subSection.education.forEach((item, index) => {
      expect(screen.getByTestId(`School ${index + 1}`).childNodes[0]).toHaveTextContent(item.school)
      expect(screen.getByTestId(`School ${index + 1}`).childNodes[1]).toHaveTextContent(item.degree + ' - ' + item.timeline.start + '-' + item.timeline.end)
    })
    expect(screen.getByTestId('Connect')).toMatchSnapshot()
    socials.links.forEach((link) => {
      expect(screen.getByTestId('Connect')).toHaveTextContent(link.label)
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.url
      )
    })
    expect(screen.getByTestId('Start a Project')).toMatchSnapshot()
    expect(screen.getByRole('link', { name: 'START A PROJECT' })).toHaveAttribute(
      'href',
      '#contact'
    )
  })

  test('does not render if content is not passed in', () => {
    // given 
    render(<About content={undefined} />)

    // then
    expect(screen.queryByTestId('About')).toBeFalsy()
  })
})
