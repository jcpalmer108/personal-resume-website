import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

const params = [
  {
    key: 'one',
    label: 'One'
  }
]

describe('Navbar', () => {
  test('renders if only required params are passed in', () => {
    render(<Navbar menu={params} />)
    expect(screen.getByTestId('Navbar')).toBeTruthy()
  })
})