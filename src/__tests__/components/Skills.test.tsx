import { SkillsModalProps } from "../../types/SkillsModal";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ButtonProps } from "../../types/Button";
import Skills from "../../components/Skills";

// mock components
const mockSkillsModal = jest.fn();
jest.mock(
  "../../components/SkillsModal",
  () =>
    ({ closeModal, content, categories }: SkillsModalProps) => {
      mockSkillsModal(closeModal, content, categories);
      return <div />;
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

// params for components
const params = {
  required: {
    content: {
      key: "about",
      label: "Skills",
      inMenu: true,
      title: "test title",
      description: ["test contents 1", "test contents 2"],
      subSection: {
        skills: {
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
          data: [
            {
              key: "test",
              label: "Test Skill 1",
              url: "https://test.skill.one/",
              category: "frontend",
            },
            {
              key: "test",
              label: "Test Skill 5",
              url: "https://test.skill.five/",
              category: "backend",
            },
            {
              key: "test",
              label: "Test Skill 2",
              url: "https://test.skill.two/",
              category: "frontend",
            },
            {
              key: "test",
              label: "Test Skill 3",
              url: "https://test.skill.three/",
              category: "frontend",
            },
            {
              key: "test",
              label: "Test Skill 4",
              url: "https://test.skill.four/",
              category: "frontend",
            },
            {
              key: "test",
              label: "Test Skill 6",
              url: "https://test.skill.six/",
              category: "backend",
            },
            {
              key: "test",
              label: "Test Skill 7",
              url: "https://test.skill.seven/",
              category: "backend",
            },
            {
              key: "test",
              label: "Test Skill 8",
              url: "https://test.skill.eight/",
              category: "backend",
            },
            {
              key: "test",
              label: "Test Skill 9",
              url: "https://test.skill.nine/",
              category: "backend",
            },
          ],
        },
      },
    },
  },
};

describe("Skills", () => {
  test("renders if only required params are passed in", () => {
    // given
    const { content } = params.required;
    render(<Skills content={content} />);

    expect(screen.getByTestId("Mobile")).toMatchSnapshot();
    expect(screen.getByTestId("NotMobile")).toMatchSnapshot();
    screen.getAllByTestId("Title").forEach((title) => {
      expect(title).toHaveTextContent(content.title);
    });
    screen.getAllByTestId("Description").forEach((desc) => {
      expect(desc).toHaveTextContent(content.description[0]);
    });
    expect(screen.getAllByTestId("Tile")).toHaveLength(9);
    expect(screen.getByTestId("Row 1").childNodes).toHaveLength(3);
    expect(screen.getByTestId("Row 2").childNodes).toHaveLength(5);
    expect(screen.getByTestId("Row 3").childNodes).toHaveLength(3);
    expect(mockButton).toHaveBeenCalled();
    expect(mockButton).toHaveBeenNthCalledWith(
      1,
      "Let's Talk",
      undefined,
      true
    );
    expect(mockButton).toHaveBeenNthCalledWith(
      2,
      "Let's Talk",
      undefined,
      true
    );

    for (let i = 0; i < 9; i++) {
      const item = content.subSection.skills.data[i];
      expect(screen.getAllByRole("link", { name: item.label })).toHaveLength(2);
      screen.getAllByRole("link", { name: item.label }).forEach((link) => {
        expect(link).toHaveAttribute("href", item.url);
      });
      screen.getAllByRole("img", { name: item.label }).forEach((image) => {
        expect(image).toHaveAttribute("alt", item.label);
      });
    }
  });

  test("does not render if less than 9 skills are entered", () => {
    // given
    const { content } = params.required;
    const slicedData = content.subSection.skills.data.slice(0, 2);
    render(
      <Skills
        content={{
          ...content,
          subSection: {
            skills: {
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
              data: slicedData,
            },
          },
        }}
      />
    );

    // then
    expect(screen.queryAllByTestId("Mobile")).toHaveLength(0);
    expect(screen.queryAllByTestId("NotMobile")).toHaveLength(0);
  });
});
