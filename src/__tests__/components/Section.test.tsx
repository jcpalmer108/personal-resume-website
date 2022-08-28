/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Section from "../../components/Section";

// params for components
const params = {
  required: {
    children: "hello world",
  },
  optional: {
    label: "test label",
    light: true,
    thin: true,
    wide: true,
    center: true,
    bottom: true,
    noTop: true,
    noBorder: true,
  },
};

describe("Section", () => {
  test("renders if required and optional params are passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <Section
        label={optional.label}
        light={optional.light}
        thin={optional.thin}
        wide={optional.wide}
        center={optional.center}
        bottom={optional.bottom}
        noTop={optional.noTop}
        noBorder={optional.noBorder}
      >
        {required.children}
      </Section>
    );

    // then
    expect(screen.getByTestId("Wrapper")).toMatchSnapshot();
    expect(screen.getByTestId("Wrapper").childElementCount).toEqual(2);
    expect(screen.getByTestId("Label")).toHaveTextContent(
      optional.label.toUpperCase()
    );
    expect(screen.getByTestId("Children")).toHaveTextContent(required.children);
  });

  test("renders if only required params are passed in", () => {
    // given
    const { required } = params;
    render(<Section>{required.children}</Section>);

    // then
    expect(screen.getByTestId("Wrapper")).toMatchSnapshot();
    expect(screen.getByTestId("Wrapper").childElementCount).toEqual(1);
    expect(screen.queryAllByTestId("Label")).toHaveLength(0);
    expect(screen.getByTestId("Children")).toHaveTextContent(required.children);
  });
});
