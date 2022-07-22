import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import About from '../../components/About';

jest.mock('../../components/Button')

const params = {
  key: "about",
  label: "About",
  inMenu: true,
  title: "test title",
  description: "test contents",
  subSection: [
    {
      key: "webster",
      school: "Webster University",
      degree: "Bachelors of Science in Computer Science",
      timeline: {
        start: 2014,
        end: 2017
      }
    },
    {
      key: "harvard",
      school: "Harvard University",
      degree: "Bachelors of Smartiness in Computer Science",
      timeline: {
        start: 2027,
        end: 2030
      }
    }
  ]
}

const mockSocials = [
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

describe('About', () => {
  test('renders if only required params are passed in', () => {
    render(
      <About content={params} />
    )
  
    expect(screen.getByTestId('About')).toMatchSnapshot()
    expect(screen.getByTestId('About')).toHaveTextContent(params.title)
    expect(screen.getByTestId('About')).toHaveTextContent(params.description)
    
    params.subSection.forEach((item) => {
      expect(screen.getByTestId('About')).toHaveTextContent(item.school)
      expect(screen.getByTestId('About')).toHaveTextContent(item.degree)
      expect(item.timeline.start).toBeInTheDocument()
      expect(item.timeline.end).toBeInTheDocument()
    })

    expect(screen.getByTestId('Connect')).toMatchSnapshot()
    mockSocials.forEach((link) => {
      expect(screen.getByTestId('Connect')).toHaveTextContent(link.label)
      expect(screen.getByRole('link', { name: link.key })).toBeTruthy()
      expect(screen.getByRole('link', { name: link.key })).toHaveAttribute(
        'href',
        link.url
      )
    })

    expect(screen.getByTestId('Start a Project')).toMatchSnapshot()
    expect(screen.getByRole('link', { name: 'Start a Project' })).toHaveAttribute(
      'href',
      '#contact'
    )
  })
})
