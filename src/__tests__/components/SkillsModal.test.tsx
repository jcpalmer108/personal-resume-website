import { LineItemProps } from "@/types/LineItem";
import { fireEvent, render, screen } from "@testing-library/react";
import "jest-styled-components";
import SkillsModal from "../../components/SkillsModal";
import { ModalProps } from "../../types/Modal";

// mock helpers
const mockDownloadResume = jest.fn();
jest.mock("../../utils/downloadResume", () => ({
  downloadResume: () => mockDownloadResume(),
}));

// mock components
const mockModal = jest.fn();
jest.mock(
  "../../components/Modal",
  () =>
    ({ closeModal, children }: ModalProps) => {
      mockModal(closeModal, children);
      return <div>{children}</div>;
    }
);

const mockLineItems = jest.fn();
jest.mock(
  "../../components/LineItem",
  () =>
    ({ icon, skill, subtitle }: LineItemProps) => {
      mockLineItems(icon, skill, subtitle);
      return <div />;
    }
);

// params for component
const params = {
  required: {
    closeModal: jest.fn(),
  },
  optional: {
    content: [
      {
        key: "test",
        label: "One",
        category: "frontend",
      },
      {
        key: "test",
        label: "Three",
        category: "frontend",
      },
      {
        key: "test",
        label: "Two",
        category: "backend",
      },
    ],
    categories: [
      {
        key: "frontend",
        label: "Frontend",
      },
      {
        key: "backend",
        label: "Backend",
      },
    ],
  },
};

describe("SkillsModal", () => {
  test("renders if required and optional params are passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <SkillsModal
        closeModal={required.closeModal}
        content={optional.content}
        categories={optional.categories}
      />
    );

    // then
    expect(screen.getByTestId("SkillsModal")).toMatchSnapshot();
    expect(screen.getByTestId("SkillsModal").childNodes).toHaveLength(
      optional.content.length
    );
    expect(screen.getAllByTestId("Subheader")).toHaveLength(
      optional.categories.length
    );
    optional.categories.forEach((category, index) => {
      const categoryNode = screen.getByTestId("SkillsModal").childNodes[index];
      expect(categoryNode.childNodes[0]).toHaveTextContent(category.label);
      expect(categoryNode.childNodes[1].childNodes).toHaveLength(
        optional.content.filter((skills) => skills.category === category.key)
          .length
      );
    });
    expect(screen.getByTestId("CallToAction")).toBeTruthy();
    expect(screen.getByTestId("CallToAction")).toHaveTextContent(
      "There's more where that came from."
    );
    expect(screen.getByTestId("ActionButton")).toHaveTextContent(
      "Download my resume".toUpperCase()
    );
  });

  test("does not render if content and categories are not passed in", () => {
    // given
    const { required } = params;
    render(<SkillsModal closeModal={required.closeModal} />);

    // then
    expect(screen.queryByTestId("SkillsModal")).toBeFalsy();
  });

  test("does not render if categories is not passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <SkillsModal
        closeModal={required.closeModal}
        content={optional.content}
      />
    );

    // then
    expect(screen.queryByTestId("SkillsModal")).toBeFalsy();
  });

  test("does not render if content is not passed in", () => {
    // given
    const { required, optional } = params;
    render(
      <SkillsModal
        closeModal={required.closeModal}
        categories={optional.categories}
      />
    );

    // then
    expect(screen.queryByTestId("SkillsModal")).toBeFalsy();
  });

  test("executes form download on ActionButton click", () => {
    // given
    const { required, optional } = params;
    render(
      <SkillsModal
        closeModal={required.closeModal}
        content={optional.content}
        categories={optional.categories}
      />
    );

    // when
    fireEvent.click(screen.getByTestId("ActionButton"));

    // then
    expect(mockDownloadResume).toHaveBeenCalled();
  });
});
