import { Sections } from "./content"
import { Skills } from "../types/content"

export type SkillsProps = {
  content: Sections | undefined
}

export type TileProps = {
  info: Skills,
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
