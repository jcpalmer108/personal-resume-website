import generateMenu from "../../utils/generateMenu";

describe("generateMenu", () => {
  test("filters out non-menu items, and keep only label & key attributes", () => {
    const response = generateMenu([
      {
        key: "1234",
        label: "first",
        inMenu: true,
        title: "testing",
      },
      {
        key: "5678",
        label: "second",
        inMenu: true,
        title: "testing",
      },
      {
        key: "0123",
        label: "third",
        inMenu: false,
        title: "testing",
      },
    ]);
    expect(response).toStrictEqual([
      {
        key: "1234",
        label: "first",
      },
      {
        key: "5678",
        label: "second",
      },
    ]);
  });

  test("returns empty array if given empty array", () => {
    const response = generateMenu([]);
    expect(response).toStrictEqual([]);
  });
});
