import { Sections } from "./content"
import { Skills } from "../types/content"

export type SkillsProps = {
  content: Sections | undefined
}

export type TileProps = {
  info: Skills,
  table: boolean
}

