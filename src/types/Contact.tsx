import { Sections, ContactInfo } from "./content"

export type ContactProps = {
  content: Sections | undefined,
  contact: ContactInfo,
  formFieldValues?: FormProps
}

export type FormProps = {
  name?: String,
  phone?: String,
  email?: String,
  message?: String
}
