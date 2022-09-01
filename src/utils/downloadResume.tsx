import {
  Document,
  Packer,
  Paragraph,
  TabStopType,
  TabStopPosition,
  TextRun,
  HeadingLevel,
  AlignmentType,
  UnderlineType,
} from "docx";
import { saveAs } from "file-saver";

export default function downloadResume(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  e.preventDefault();

  let doc = new Document({
    styles: customStyles,
    sections: [
      {
        children: [
          ...generateHeader(),
          ...generateEducation(),
          ...generateWorkExperience(),
        ],
      },
    ],
  });

  saveDocumentToFile(doc, "New Document.docx");
}

const customStyles = {
  paragraphStyles: [
    {
      id: "title",
      name: "Title",
      basedOn: "Normal",
      run: {
        italics: true,
        bold: true,
        size: 26,
        font: "Gilroy-Regular",
      },
      paragraph: {
        spacing: { line: 276, before: 150, after: 150 },
      },
    },
  ],
  default: {
    heading2: {
      run: {
        size: 26,
        bold: true,
        underline: {
          type: UnderlineType.DOUBLE,
          color: "FF0000",
        },
      },
      paragraph: {
        spacing: {
          before: 240,
          after: 120,
        },
      },
    },
  },
};

function saveDocumentToFile(doc: Document, fileName: string) {
  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  Packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType);
    saveAs(docblob, fileName);
  });
}

export function generateHeader() {
  return [
    new Paragraph({
      text: "To whom it may concern:",
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.CENTER,
    }),
  ];
}

export function generateEducation() {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: "Hey everyone", bold: true }),
        new TextRun("\t11th November 1999"),
      ],
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
    }),
  ];
}

export function generateWorkExperience() {
  return [];
}

export function generateSkills() {
  return [];
}
