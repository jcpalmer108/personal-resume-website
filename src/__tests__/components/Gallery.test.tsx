import { render, screen } from "@testing-library/react";
import Gallery from "../../components/Gallery";

describe('Gallery', () => {
  test('renders correctly', () => {
    render(<Gallery />)
    expect(screen.getByRole('img', { name: 'Jenna 1'})).toBeTruthy()
    expect(screen.getByRole('img', { name: 'Jenna 2'})).toBeTruthy()
    expect(screen.getByRole('img', { name: 'Jenna 3'})).toBeTruthy()
  })
})