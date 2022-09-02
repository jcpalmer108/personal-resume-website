import {
  Document,
  Packer,
  Paragraph,
  TabStopType,
  TabStopPosition,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import content from "../assets/content/content.json";

const customStyles = {
  paragraphStyles: [
    {
      id: "font-formatting",
      name: "Description",
      basedOn: "Normal",
      run: {
        size: 16,
        font: "Gilroy-Regular",
      },
      paragraph: {
        spacing: { line: 400 },
      },
    },
  ],
  default: {
    heading1: {
      run: {
        size: 26,
        bold: true,
        font: "Gilroy-Medium",
      },
      paragraph: {
        spacing: {
          line: 400,
          before: 60,
        },
      },
    },
    heading2: {
      run: {
        size: 20,
        bold: true,
        font: "Gilroy-Medium",
      },
      paragraph: {
        spacing: {
          line: 400,
          before: 120,
          after: 120,
        },
      },
    },
  },
};

function downloadResume(e: any) {
  e.preventDefault();

  let doc = new Document({
    styles: customStyles,
    sections: [
      {
        children: [
          ...generateHeader(),
          ...generateEducation(),
          ...generateWorkExperience(),
          ...generateSkills(),
          ...generateExtras(),
        ],
      },
    ],
  });

  saveDocumentToFile(doc, `JennaPalmer_${new Date().getFullYear()}.docx`);
}

async function saveDocumentToFile(doc: Document, fileName: string) {
  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  const blob = await Packer.toBlob(doc);
  const docblob = blob.slice(0, blob.size, mimeType);
  saveAs(docblob, fileName);
}

function generateHeader() {
  const resumeDescription = content.sections.find(
    (section) => section.key === "resume-description"
  );

  // name and subline
  let response = [
    new Paragraph({
      text: "Jenna Palmer",
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      text: "Full-Stack Software Engineer",
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.CENTER,
    }),
  ];

  // description
  if (
    resumeDescription &&
    resumeDescription.description &&
    resumeDescription.description.length > 0
  ) {
    resumeDescription.description.forEach((paragraph) => {
      response.push(
        new Paragraph({
          text: paragraph,
          style: "font-formatting",
        })
      );
    });
  }

  return response;
}

function generateEducation() {
  let response: any = [];
  const about = content.sections.find((section) => section.key === "about");

  if (
    about &&
    about.subSection &&
    about.subSection.education &&
    about.subSection.education.length > 0
  ) {
    // section title
    response.push(
      new Paragraph({
        text: "EDUCATION",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.LEFT,
      })
    );

    about.subSection.education.forEach((edu) => {
      // degree & timeline
      response.push(
        new Paragraph({
          style: "font-formatting",
          children: [
            new TextRun({ text: edu.degree, bold: true }),
            new TextRun(`\t${edu.timeline.start} - ${edu.timeline.end}`),
          ],
          tabStops: [
            {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
            },
          ],
        })
      );

      // employer & location
      response.push(
        new Paragraph({
          style: "font-formatting",
          text: `${edu.school} - ${edu.location}`,
        })
      );
    });
  }

  return response;
}

function generateWorkExperience() {
  let response: any = [];
  const experience = content.sections.find(
    (section) => section.key === "experience"
  );

  if (
    experience &&
    experience.subSection &&
    experience.subSection.experience &&
    experience.subSection.experience.length > 0
  ) {
    // section title
    response.push(
      new Paragraph({
        text: "WORK EXPERIENCE",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.LEFT,
      })
    );

    experience.subSection.experience.forEach((job) => {
      // job title & timeline
      response.push(
        new Paragraph({
          style: "font-formatting",
          children: [
            new TextRun({ text: job.title, bold: true }),
            new TextRun(`\t${job.timeline.start} - ${job.timeline.end}`),
          ],
          tabStops: [
            {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
            },
          ],
        })
      );

      // employer & location
      response.push(
        new Paragraph({
          style: "font-formatting",
          text: `${job.employer} - ${job.location}`,
        })
      );

      // bullet points
      job.bullets.forEach((bullet) => {
        response.push(
          new Paragraph({
            style: "font-formatting",
            text: bullet,
            bullet: {
              level: 0,
            },
          })
        );
      });

      // empty line between job postings
      response.push(new Paragraph({}));
    });
  }

  return response;
}

function generateSkills() {
  let response: any = [];
  const skills = content.sections.find((section) => section.key === "skills");

  if (
    skills &&
    skills.subSection &&
    skills.subSection.skills &&
    skills.subSection.skills.data.length > 0
  ) {
    // section title
    response.push(
      new Paragraph({
        text: "SKILLS",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.LEFT,
      })
    );

    // skills
    const skillsData =
      skills.subSection && skills.subSection.skills
        ? skills.subSection.skills.data
        : [];
    const regColLength = skillsData.length / 3;
    const bigColLength = regColLength + (skillsData.length % 3);
    response.push(
      new Table({
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: skillsData.slice(0, bigColLength).map(
                  (bullet) =>
                    new Paragraph({
                      text: bullet.label,
                      bullet: {
                        level: 0,
                      },
                    })
                ),
                borders: {
                  top: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  bottom: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  left: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  right: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                },
              }),
              new TableCell({
                children: skillsData
                  .slice(bigColLength, bigColLength + regColLength)
                  .map(
                    (bullet) =>
                      new Paragraph({
                        text: bullet.label,
                        bullet: {
                          level: 0,
                        },
                      })
                  ),
                borders: {
                  top: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  bottom: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  left: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  right: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                },
              }),
              new TableCell({
                children: skillsData
                  .slice(bigColLength + regColLength, skillsData.length)
                  .map(
                    (bullet) =>
                      new Paragraph({
                        text: bullet.label,
                        bullet: {
                          level: 0,
                        },
                      })
                  ),
                borders: {
                  top: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  bottom: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  left: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                  right: {
                    style: BorderStyle.NONE,
                    size: 0,
                    color: "FFFFFF",
                  },
                },
              }),
            ],
          }),
        ],
      })
    );

    // line break
    response.push(new Paragraph({}));
  }

  return response;
}

function generateExtras() {
  const extras = content.sections.find(
    (section) => section.key === "resume-extras"
  );
  let response: any = [];

  if (extras && extras.description && extras.description.length > 0) {
    response.push(
      new Paragraph({
        text: "EXTRAS",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.LEFT,
      })
    );

    extras.description.forEach((paragraph) => {
      response.push(
        new Paragraph({
          text: paragraph,
          bullet: {
            level: 0,
          },
          style: "font-formatting",
        })
      );
    });
  }

  return response;
}

export {
  downloadResume,
  saveDocumentToFile,
  generateEducation,
  generateHeader,
  generateWorkExperience,
  generateSkills,
  generateExtras,
  customStyles,
};
