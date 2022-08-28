import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import Modal from "../../components/Modal";

// params needed for component
const params = {
  required: {
    children: "hello world",
    closeModal: jest.fn(),
  },
};

describe("Modal", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { children, closeModal } = params.required;
    render(<Modal closeModal={closeModal}>{children}</Modal>);

    // then
    expect(screen.getByTestId("Modal")).toMatchSnapshot();
    expect(screen.getByTestId("Overlay")).toMatchSnapshot();
    expect(
      screen.getByTestId("ChildrenWrapper").childNodes[0].textContent
    ).toBe(children);
  });

  test("executes closeModal when close icon is clicked", () => {
    // given
    const { children, closeModal } = params.required;
    render(<Modal closeModal={closeModal}>{children}</Modal>);

    // when
    fireEvent.click(screen.getByTestId("Overlay"));

    // then
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test("executes closeModal when blackened overlay is clicked", () => {
    // given
    const { children, closeModal } = params.required;
    render(<Modal closeModal={closeModal}>{children}</Modal>);

    // when
    fireEvent.click(screen.getByTestId("CloseIcon"));

    // then
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
