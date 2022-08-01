import { ContactProps } from "../types/Contact";
import Section from "./Section";
import { 
  Mobile, 
  Form
} from "../styles/components/Contact"
import Input from "./Input"
import { useState } from "react";

type FormProps = {
  name?: String,
  phone?: String,
  email?: String,
  message?: String
}

export default function Contact({ content }: ContactProps) {
  const [ formValues, setFormValues ] = useState<FormProps>({
    name: 'jerry'
  })

  const updateFormValues = (key: string, e: any) => {
    setFormValues({
      ...formValues,
      [key]: e.target.value
    })
  }
  
  return (
    <Section label={content?.label} center>
      <Mobile>
        <h2>{content?.title}</h2>
        <p>{content?.description && content?.description[0]}</p>
        <Form>
          <Input label="name" value={formValues.name} updateForm={(e: any) => updateFormValues("name", e)} />
        </Form>
      </Mobile>
    </Section>
  )
}