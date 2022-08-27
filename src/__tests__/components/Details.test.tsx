import { render, screen } from "@testing-library/react";
import Details from "../../components/Details";

// params needed for component
const params = {
  required: {
    label: "test label",
  },
  optional: {
    info: ["1", "2"],
    noBottom: true,
  },
};

describe("Details", () => {
  test("renders if optional and required params are passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <Details
        label={required.label}
        info={optional.info}
        noBottom={optional.noBottom}
      />
    );

    // then
    expect(screen.getByTestId("Details")).toMatchSnapshot();
    expect(screen.getByTestId("Details")).toHaveTextContent(required.label);
    optional.info.forEach((item) => {
      expect(screen.getByTestId("Details")).toHaveTextContent(item);
    });
  });

  test("does not render if no info is passed in", () => {
    // given
    const { required } = params;
    render(<Details label={required.label} info={undefined} />);

    // then
    expect(screen.queryByTestId("Details")).toBeFalsy();
  });
});
