import * as helpers from "../../utils/downloadResume";
import { Document } from "docx";

// TODO: WRITE THE TESTS TO MAKE SURE RESUME IS GENERATED PROPERLY

// mock imports
jest.mock("docx", () => ({
  Paragraph: jest.fn(),
  HeadingLevel: {
    HEADING_1: "h1",
  },
  AlignmentType: {
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right",
  },
  TextRun: jest.fn(),
  TabStopType: {
    RIGHT: "right",
    LEFT: "left",
  },
  TabStopPosition: {
    MAX: "max",
  },
  WidthType: {
    PERCENTAGE: "percentage",
  },
  BorderStyle: {
    NONE: "none",
  },
  TableCell: jest.fn(),
  TableRow: jest.fn(),
  Table: jest.fn(),
  Document: jest.fn(),
  Packer: {
    toBlob: async () => Promise.resolve(new Array(3).fill("test")),
  },
}));

jest.mock("file-saver", () => ({
  saveAs: jest.fn(),
}));

// Download Resume function
describe("Download Resume", () => {
  it("should be called correctly", () => {
    // given
    jest
      .spyOn(helpers, "saveDocumentToFile")
      .mockReturnValue(Promise.resolve());
    jest.spyOn(helpers, "generateHeader").mockReturnValue([]);
    jest.spyOn(helpers, "generateEducation").mockReturnValue([]);
    jest.spyOn(helpers, "generateWorkExperience").mockReturnValue([]);
    jest.spyOn(helpers, "generateSkills").mockReturnValue([]);
    jest.spyOn(helpers, "generateExtras").mockReturnValue([]);

    const clickEvent = new MouseEvent("click");
    Object.assign(clickEvent, { preventDefault: jest.fn() });

    // when
    helpers.downloadResume(clickEvent);

    // expect
    expect(clickEvent.preventDefault).toHaveBeenCalled();
    expect(Document.mock.calls[0][0].styles).toBe(helpers.customStyles);
    expect(Document.mock.calls[0][0].sections[0].children).toHaveLength(52);
  });
});
