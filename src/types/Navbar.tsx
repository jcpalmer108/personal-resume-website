export type Link = {
  key: string,
  label: string,
  url: string,
}

export type NavbarProps = {
  menu: MenuItem[]
}

type MenuItem = {
  key: string,
  label: string
}