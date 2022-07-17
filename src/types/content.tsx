export type Content = {
  sections: Sections[],
}

export type Sections = {
  key: string,
  label: string,
  inMenu: boolean,
  title: string,
  description?: string,
  subSection?: Education[] | Skills[] | Quotes[] | Experience[]
}

export type Education = {
  key: string,
  school: string,
  degree: string,
  timeline: Timeline
}

export type Skills = {
  key: string,
  label: string,
  url: string
}

export type Timeline = {
  start: string,
  end: string,
}

export type Quotes = {
  quote: string,
  person: string,
  title: string
}

export type Experience = {
  title: string,
  employer: string,
  location: string,
  description: string,
  icon: string,
  timeline: Timeline
  team?: string,
  organization?: string,
  projects?: Project[]
}

export type Project = {
  industry: string,
  title: string,
  description: string,
  icon: string
}
