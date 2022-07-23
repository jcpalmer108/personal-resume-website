import { render, screen } from '@testing-library/react'
import Testimonials from '../../components/Testimonials.tsx'

const params = {
  key: "testimonials",
  label: "Testimonials",
  title: "Test title",
  description: [
    "test description"
  ],
  inMenu: true,
  subSection: {
    quotes: [
      {
        quote: "this is a test quote",
        person: "Jane Doe",
        title: "Manager at Slalom Conuslting LLC"      
      },
      {
        quote: "this is a test quote",
        person: "John Doe",
        title: "Analyst at Slalom Conuslting LLC"      
      },
    ]
  }
}

describe('Testimonials', () => {
  test('renders if only required params are passed in', () => {
    <Testimonials content={params} />

    expect(screen.getByTestId('Testimonials')).toMatchSnapshot()
    expect(screen.getByTestId('Testimonials')).toMatchSnapshot()
    expect(screen.getByTestId('Marquee').childNodes).toHaveLength(params.subSection.quotes.length)

    params.subSection.quotes.forEach((item, index) => {
      expect(screen.getByTestId(`Quote ${index + 1}`)).toBeTruthy()
      expect(screen.getByTestId(`Quote ${index + 1}`).childNodes[0]).toHaveTextContent(item.quote)
      expect(screen.getByTestId(`Quote ${index + 1}`).childNodes[1]).toHaveTextContent(item.person)
      expect(screen.getByTestId(`Quote ${index + 1}`).childNodes[0]).toHaveTextContent(item.title)
    })

    expect(screen.getByRole('image', { name: 'arrow left' })).toBeTruthy()
    expect(screen.getByRole('image', { name: 'arrow right' })).toBeTruthy()
  })
})