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
    name: '',
    phone: '',
    email: '',
    message: ''
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
          <Input label="phone" value={formValues.phone} updateForm={(e: any) => updateFormValues("phone", e)} />
          <Input label="email" value={formValues.email} updateForm={(e: any) => updateFormValues("email", e)} />
          <Input area label="message" value={formValues.message} updateForm={(e: any) => updateFormValues("message", e)} />
        </Form>
      </Mobile>
    </Section>
  )
}