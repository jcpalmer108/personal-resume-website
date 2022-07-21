import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

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

describe('Navbar', () => {
  test('renders if only required params are passed in', () => {
    render(<Navbar menu={params} />)
    expect(screen.getByTestId('Navbar')).toMatchSnapshot()
    expect(screen.getByTestId('Desktop Menu').childNodes).toHaveLength(params.length)
    expect(screen.getByTestId('Mobile Menu').childNodes).toHaveLength(params.length)
    expect(screen.getByTestId('Socials')).toBeTruthy()
    expect(screen.getByTestId('Hamburger')).toBeTruthy()
  })
})