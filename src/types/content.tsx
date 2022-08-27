export type ContactInfo = {
  email: string;
  cell: string;
};

export type Content = {
  sections: Sections[];
};

export type Action = {
  text: string;
  link?: string;
};

export type Sections = {
  key: string;
  label?: string;
  inMenu: boolean;
  title?: string;
  image?: string;
  action?: Action;
  description?: string[];
  subSection?: SubSections;
};

type SubSections = {
  education?: Education[];
  skills?: Skills;
  quotes?: Quotes[];
  experience?: Experience[];
  gallery?: String[];
};

export type Education = {
  key: string;
  school: string;
  degree: string;
  timeline: Timeline;
};

export type Category = {
  key: string;
  label: string;
};

export type Skills = {
  categories: Category[];
  data: Skill[];
};

export type Skill = {
  key: string;
  label: string;
  category: string;
  url?: string;
  subtitle?: string;
};

type Timeline = {
  start: string;
  end: string;
};

export type Quotes = {
  quote: string;
  person: string;
  title: string;
};

export type Experience = {
  title: string;
  employer: string;
  location: string;
  description: string[];
  icon: string;
  timeline: Timeline;
  team?: string;
  organization?: string;
  projects?: Project[];
};

type Project = {
  industry: string;
  title: string;
  description: string[];
  icon: string;
};
