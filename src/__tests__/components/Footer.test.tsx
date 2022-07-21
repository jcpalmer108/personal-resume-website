import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

const params = [
  {
    key: 'one',
    label: 'One'
  },
  {
    key: 'two',
    label: 'Two'
  }
]

describe('Footer', () => {
  test('renders if only required params are passed in', () => {
    render(<Footer menu={params} />)
    expect(screen.getByTestId('Footer')).toMatchSnapshot()
    expect(screen.getByTestId('Footer Menu').childNodes).toHaveLength(params.length)
    expect(screen.getByTestId('Copyright')).toBeTruthy()
  })
})