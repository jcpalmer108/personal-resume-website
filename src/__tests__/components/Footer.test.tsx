import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { SeparatingLineProps } from '../../types/SeparatingLine';

// mock components
const mockSeparatingLine = jest.fn();
jest.mock("../../components/SeparatingLine", () => ({ light, thin, always }: SeparatingLineProps) => {
  mockSeparatingLine(light, thin, always);
  return <hr />;
});

const mockSection = jest.fn();
jest.mock("../../components/Section", () => ({ label, children, light, thin, wide, center, bottom, noTop, noBorder }: SectionProps) => {
  mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
  return <div>{children}</div>;
});

// params needed for component
const params = {
  required: {
    menu: [
      {
        key: 'one',
        label: 'One'
      },
      {
        key: 'two',
        label: 'Two'
      }
    ]
  }
}

describe('Footer', () => {
  test('renders if only required params are passed in', () => {
    // given 
    const { required } = params
    render(<Footer menu={required.menu} />)

    // then
    expect(screen.getByTestId('Footer')).toMatchSnapshot()
    expect(screen.getByTestId('Copyright')).toBeTruthy()
    
    expect(screen.getByTestId('Footer Menu').childNodes).toHaveLength(required.menu.length)
    required.menu.forEach((link, index) => {
      expect(screen.getByTestId('Footer Menu').childNodes[index]).toHaveTextContent(link.label.toUpperCase())
    })

    expect(mockSeparatingLine).toHaveBeenCalled()
    expect(mockSeparatingLine).toHaveBeenCalledWith(undefined, true, true)

    expect(mockSection).toHaveBeenCalledTimes(2)
    expect(mockSection).toHaveBeenNthCalledWith(1, undefined, undefined, true, true, undefined, undefined, undefined, undefined)
    expect(mockSection).toHaveBeenNthCalledWith(2, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined)
  })
})