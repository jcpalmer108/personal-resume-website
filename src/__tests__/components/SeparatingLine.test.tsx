import { render, screen } from "@testing-library/react";
import SeparatingLine from "../../components/SeparatingLine";

// params for component
const params = {
  optional: {
    light: true,
    thin: true,
    always: true,
  },
};
describe("SeparatingLine", () => {
  test("renders if optional params are passed in", () => {
    // given
    const { optional } = params;
    render(
      <SeparatingLine
        light={optional.light}
        thin={optional.thin}
        always={optional.always}
      />
    );

    // then
    expect(screen.getByTestId("Line")).toMatchSnapshot();
  });

  test("renders if optional params are not passed in", () => {
    // given
    render(<SeparatingLine />);

    // then
    expect(screen.getByTestId("Line")).toMatchSnapshot();
  });
});
