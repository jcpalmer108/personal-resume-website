import { render, screen } from "@testing-library/react";
import Gallery from "../../components/Gallery";

// mock components
const mockSection = jest.fn();
jest.mock("../../components/Section", () => ({ label, children, light, thin, wide, center, bottom, noTop, noBorder }: SectionProps) => {
  mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
  return <div>{children}</div>;
});

// params needed for component
const params = {
  required: {
    photos: new Array(10).fill("test")
  }
}

describe('Gallery', () => {
  test('renders if many gallery images are are passed in', () => {
    // given
    render(<Gallery photos={params.required.photos} />)

    // then
    expect(screen.getByTestId("Gallery").childNodes).toHaveLength(3)
    for(let i = 0; i < 3; i++) {
      expect(screen.getByRole('img', { name: `Photo ${i + 1}`})).toBeTruthy()
    }
  })

  test('renders if just enough gallery images are are passed in', () => {
    // given
    render(<Gallery photos={params.required.photos.slice(0, 3)} />)

    // then
    expect(screen.getByTestId("Gallery").childNodes).toHaveLength(3)
    for(let i = 0; i < 3; i++) {
      expect(screen.getByRole('img', { name: `Photo ${i + 1}`})).toBeTruthy()
    }
  })

  test('does not render if fewer than 3 gallery images are are passed in', () => {
    // given
    render(<Gallery photos={params.required.photos.slice(0, 2)} />)

    // then
    expect(screen.queryByTestId("Gallery")).toBeFalsy()
  })
})