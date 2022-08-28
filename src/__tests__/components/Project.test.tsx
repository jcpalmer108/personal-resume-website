import { render, screen } from "@testing-library/react";
import Project from "../../components/Project";

// params for component
const params = {
  required: {
    icon: "test",
    industry: "test industry",
    title: "test title",
    description: ["1", "2"],
  },
};

describe("Project", () => {
  test("renders if optional and required params are passed in", () => {
    // given
    const { required } = params;
    render(
      <Project
        icon={required.icon}
        industry={required.industry}
        title={required.title}
        description={required.description}
      />
    );

    // then
    expect(screen.getByTestId("Project")).toMatchSnapshot();
    expect(screen.getByTestId("Icon")).toBeTruthy();
    expect(screen.getByTestId("Title")).toHaveTextContent(required.title);
    expect(screen.getByTestId("Industry")).toHaveTextContent(required.industry);
    expect(screen.getByTestId("Description")).toHaveTextContent(
      required.description.join("")
    );
  });
});
