import { SectionProps } from "../../types/Section";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

// mock content
jest.mock(
  "../../assets/content/socials.json",
  () => ({
    links: [
      {
        key: "github",
        label: "Github",
        url: "https://www.github.com/jcpalmer108/",
      },
      {
        key: "leetcode",
        label: "Leetcode",
        url: "https://leetcode.com/darthToaster/",
      },
    ],
  }),
  { virtual: true }
);

// mock components
const mockSection = jest.fn();
jest.mock(
  "../../components/Section",
  () =>
    ({
      label,
      children,
      light,
      thin,
      wide,
      center,
      bottom,
      noTop,
      noBorder,
    }: SectionProps) => {
      mockSection(label, light, thin, wide, center, bottom, noTop, noBorder);
      return <div>{children}</div>;
    }
);

// params needed for component
const params = {
  required: {
    menu: [
      {
        key: "one",
        label: "One",
      },
      {
        key: "two",
        label: "Two",
      },
    ],
  },
};

describe("Navbar", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { menu } = params.required;
    render(<Navbar menu={menu} />);

    // then
    expect(screen.getByTestId("Navbar")).toMatchSnapshot();
    expect(screen.getByTestId("Desktop Menu").childNodes).toHaveLength(
      menu.length
    );
    expect(screen.getByTestId("Mobile Menu").childNodes).toHaveLength(
      menu.length
    );
    expect(screen.getByTestId("Socials")).toBeTruthy();
    expect(screen.getByTestId("Hamburger")).toBeTruthy();
    expect(mockSection).toHaveBeenCalledTimes(1);
    expect(mockSection).toHaveBeenCalledWith(
      undefined,
      true,
      undefined,
      true,
      undefined,
      undefined,
      undefined,
      undefined
    );
  });
});
