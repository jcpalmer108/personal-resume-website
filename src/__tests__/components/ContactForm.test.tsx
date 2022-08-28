import ContactForm from "../../components/ContactForm";
import { InputProps } from "../../types/Input";
import { render, screen } from "@testing-library/react";

// mock components
const mockInput = jest.fn();
jest.mock(
  "../../components/Input",
  () =>
    ({ label, value, updateForm, area, noBorder }: InputProps) => {
      mockInput(label, value, area, noBorder);
      return <div />;
    }
);

// params for component
const params = {
  required: {
    formValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    updateForm: jest.fn(),
  },
};

describe("ContactForm", () => {
  test("renders if required params are passed in", () => {
    // given
    const { formValues, updateForm } = params.required;
    render(<ContactForm formValues={formValues} updateForm={updateForm} />);

    // then
    expect(screen.getByTestId("ContactForm").childNodes).toHaveLength(4);
    expect(mockInput).toHaveBeenCalledTimes(4);
    expect(mockInput).toHaveBeenNthCalledWith(
      1,
      "Name",
      "",
      undefined,
      undefined
    );
    expect(mockInput).toHaveBeenNthCalledWith(
      2,
      "Phone",
      "",
      undefined,
      undefined
    );
    expect(mockInput).toHaveBeenNthCalledWith(
      3,
      "Email",
      "",
      undefined,
      undefined
    );
    expect(mockInput).toHaveBeenNthCalledWith(
      4,
      "Message",
      "",
      true,
      undefined
    );
  });
});
