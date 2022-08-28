/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../../components/Input";

// params for component
const params = {
  required: {
    label: "test-label",
    updateForm: jest.fn(),
  },
  optional: {
    value: "test-value",
    area: true,
    noBorder: true,
  },
};

describe("Input", () => {
  test("renders if optional and required params are passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <Input
        label={required.label}
        value={optional.value}
        updateForm={required.updateForm}
        area={optional.area}
        noBorder={optional.noBorder}
      />
    );

    // then
    expect(screen.getByTestId("Input")).toMatchSnapshot();
    expect(screen.getByTestId("Input").childNodes[0].nodeName).toBe("TEXTAREA");
    expect(screen.getByTestId("Input").childNodes[1].nodeName).toBe("LABEL");
    expect(screen.getByTestId("Input").childNodes[1]).toHaveTextContent(
      required.label.toUpperCase()
    );
  });

  test("renders if required params and value are passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <Input
        label={required.label}
        value={optional.value}
        updateForm={required.updateForm}
      />
    );

    // then
    expect(screen.getByTestId("Input")).toMatchSnapshot();
    expect(screen.getByTestId("Input").childNodes[0].nodeName).toBe("INPUT");
    expect(screen.getByTestId("Input").childNodes[1].nodeName).toBe("LABEL");
    expect(screen.getByTestId("Input").childNodes[1]).toHaveTextContent(
      required.label.toUpperCase()
    );
  });

  test("does not render if value is not passed in", () => {
    // given
    const { required } = params;
    render(<Input label={required.label} updateForm={required.updateForm} />);

    // then
    expect(screen.queryByTestId("Input")).toBeFalsy();
  });

  test("updateForm should be called on input update", () => {
    // given
    const { required, optional } = params;
    render(
      <Input
        label={required.label}
        value={optional.value}
        updateForm={required.updateForm}
      />
    );

    // when
    userEvent.type(screen.getByTestId("Input").children[0], "test");

    // then
    expect(required.updateForm).toHaveBeenCalledTimes(4); // one call for each letter input
  });
});
