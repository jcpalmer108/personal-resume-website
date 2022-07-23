import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import About from '../../components/About';

jest.mock('../../components/Button')

const params = {
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
    expect(screen.getByTestId('Title')).toHaveTextContent(params.title)

    params.description.forEach((item, index) => {
      expect(screen.getByTestId(`Description ${index + 1}`)).toHaveTextContent(item)
    })
    
    expect(screen.getByTestId('Schooling').childNodes).toHaveLength(params.subSection.education.length + 1)
    params.subSection.education.forEach((item, index) => {
      expect(screen.getByTestId(`School ${index + 1}`).childNodes[0]).toHaveTextContent(item.school)
      expect(screen.getByTestId(`School ${index + 1}`).childNodes[1]).toHaveTextContent(item.degree + ' - ' + item.timeline.start + '-' + item.timeline.end)
    })

    expect(screen.getByTestId('Connect')).toMatchSnapshot()
    mockSocials.forEach((link) => {
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
})
