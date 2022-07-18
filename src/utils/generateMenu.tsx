import { Sections } from '../types/content';

export default function generateMenu(menu: Sections[]) {
  const filtered = menu.filter((item) => item.inMenu)
  return filtered.map((item) => ({
    key: item.key,
    label: item.label
  }))
}