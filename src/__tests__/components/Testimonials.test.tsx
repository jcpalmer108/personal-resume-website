import { render, screen, fireEvent } from '@testing-library/react'
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
    render(<Testimonials content={params} />)

    expect(screen.getByTestId('Testimonials')).toMatchSnapshot()
    expect(screen.getByTestId('Quote')).toHaveTextContent(params.subSection.quotes[0].quote)
    expect(screen.getByTestId('Person')).toHaveTextContent(params.subSection.quotes[0].person)
    expect(screen.getByTestId('Title')).toHaveTextContent(params.subSection.quotes[0].title)
    expect(screen.getByTestId('Dots').childNodes).toHaveLength(params.subSection.quotes.length)
    expect(screen.getByRole('img', { name: 'arrow left' })).toBeTruthy()
    expect(screen.getByRole('img', { name: 'arrow right' })).toBeTruthy()
  })

  test('expect arrow left to decrement, and arrow right to increment the selected index', () => {
    render(<Testimonials content={params} />)
    expect(screen.getByTestId('Quote')).toHaveTextContent(params.subSection.quotes[0].quote)
    fireEvent.click(screen.getByRole('img', { name: 'arrow right' }))
    expect(screen.getByTestId('Quote')).toHaveTextContent(params.subSection.quotes[1].quote)
    fireEvent.click(screen.getByRole('img', { name: 'arrow left' }))
    expect(screen.getByTestId('Quote')).toHaveTextContent(params.subSection.quotes[0].quote)
  })
})