import { SectionProps } from "../../types/Section";
import { fireEvent, render, screen } from "@testing-library/react";
import Testimonials from "../../components/Testimonials";

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

const params = {
  required: {
    content: {
      key: "testimonials",
      label: "Testimonials",
      title: "Test title",
      description: ["test description"],
      inMenu: true,
      subSection: {
        quotes: [
          {
            quote: "this is a test quote",
            person: "Jane Doe",
            title: "Manager at Slalom Conuslting LLC",
          },
          {
            quote: "this is a test quote",
            person: "John Doe",
            title: "Analyst at Slalom Conuslting LLC",
          },
        ],
      },
    },
  },
};

describe("Testimonials", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { content } = params.required;
    render(<Testimonials content={content} />);

    // then
    expect(screen.getByTestId("Testimonials")).toMatchSnapshot();
    expect(screen.getByTestId("Quote")).toHaveTextContent(
      content.subSection.quotes[0].quote
    );
    expect(screen.getByTestId("Person")).toHaveTextContent(
      content.subSection.quotes[0].person
    );
    expect(screen.getByTestId("Title")).toHaveTextContent(
      content.subSection.quotes[0].title
    );
    expect(screen.getByTestId("Dots").childNodes).toHaveLength(
      content.subSection.quotes.length
    );
    expect(screen.getByRole("img", { name: "arrow left" })).toBeTruthy();
    expect(screen.getByRole("img", { name: "arrow right" })).toBeTruthy();
  });

  test("does not render if content is not passed in", () => {
    // given
    render(<Testimonials content={undefined} />);

    // then
    expect(screen.queryByTestId("Testimonials")).toBeFalsy();
  });

  test("expect arrow left to decrement, and arrow right to increment the selected index", () => {
    // given
    const { content } = params.required;
    render(<Testimonials content={content} />);
    expect(screen.getByTestId("Quote")).toHaveTextContent(
      content.subSection.quotes[0].quote
    );

    // when
    fireEvent.click(screen.getByRole("img", { name: "arrow right" }));

    // then
    expect(screen.getByTestId("Quote")).toHaveTextContent(
      content.subSection.quotes[1].quote
    );

    // when
    fireEvent.click(screen.getByRole("img", { name: "arrow left" }));

    // then
    expect(screen.getByTestId("Quote")).toHaveTextContent(
      content.subSection.quotes[0].quote
    );
  });
});
