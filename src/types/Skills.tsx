import { Sections } from "./content"
import { Skill } from "../types/content"

export type SkillsProps = {
  content: Sections | undefined
}

export type TileProps = {
  info: Skill,
  table: boolean
}

export type DescriptionAndActionProps = {
  openModal: Function,
  description: string
}

export type TitleProps = {
  title: string
}

export type CellProps = {
  first?: boolean | undefined,
  last?: boolean | undefined
}
