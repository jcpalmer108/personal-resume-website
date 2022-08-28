import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Landing from "../../components/Landing";
import { ButtonProps } from "../../types/Button";
import { SectionProps } from "../../types/Section";

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

const mockButton = jest.fn();
jest.mock(
  "../../components/Button",
  () =>
    ({ label, url, onClick }: ButtonProps) => {
      mockButton(label, url, onClick ? true : false);
      return <div />;
    }
);

// params needed for components
const params = {
  required: {
    content: {
      key: "landing",
      label: "Landing",
      inMenu: false,
      title: "test title",
      action: {
        text: "test action",
        link: "#contact",
      },
      image: "pexels-ekaterina-bolovtsova-4049791.jpg",
      description: ["test content 1", "test content 2"],
    },
  },
};

describe("Landing", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { content } = params.required;
    render(<Landing content={content} />);

    // then
    expect(screen.getByTestId("Main")).toMatchSnapshot();
    expect(screen.getByTestId("Main")).toHaveTextContent(content.title);
    content.description.forEach((item, index) => {
      expect(screen.getByTestId(`Description ${index + 1}`)).toBeTruthy();
      expect(screen.getByTestId(`Description ${index + 1}`)).toHaveTextContent(
        item
      );
    });
    expect(mockButton).toHaveBeenCalledTimes(1);
    expect(mockButton).toHaveBeenCalledWith(
      content.action.text,
      content.action.link,
      false
    );
    expect(screen.getByRole("img", { name: "landing mobile" })).toBeTruthy();
    expect(screen.getByRole("img", { name: "landing mobile" })).toHaveAttribute(
      "src",
      content.image
    );
    expect(screen.queryByRole("img", { name: "landing desktop" })).toBeFalsy();
    expect(screen.getByTestId("DiscoverMore")).toMatchSnapshot();
    expect(screen.queryByRole("img", { name: "scroll" })).toBeFalsy();
  });
});
