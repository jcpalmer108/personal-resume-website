import { ContactProps } from "../types/Contact";
import Section from "./Section";
import { 
  Mobile, 
  Form,
  Button
} from "../styles/components/Contact"
import Input from "./Input"
import { useState } from "react";

type FormProps = {
  name?: String,
  phone?: String,
  email?: String,
  message?: String
}

export default function Contact({ content, contact }: ContactProps) {
  const [ isDisabled, setIsDisabled ] = useState<boolean>(true)
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
    updateIsDisabled()
  }

  const generateBody = () => {
    const body = [ 
      `Phone: ${formValues.phone}`,
      `Email: ${formValues.email}\n`,
      `Message: ${formValues.message}`
    ]

    return encodeURI(body.join('\n'))
  }

  const resetFormValues = () => {
    setFormValues({
      name: '',
      phone: '',
      email: '',
      message: ''  
    })
  }

  const openMailLink = (e: any) => {
    e.preventDefault();
    console.log('hi')
    const emailSubject = encodeURI("NEW: Website Response");
    const url = `mailto:${contact.email}?subject=${emailSubject}&body=${generateBody()}`
    window.open(url, '_blank');
    resetFormValues();
  }

  const updateIsDisabled = () => {
    const { name, phone, email, message } = formValues;
    setIsDisabled(name === '' || phone === '' || email === '' || message === '')
  }
  
  return (
    <Section label={content?.label} center>
      <Mobile>
        <h2>{content?.title}</h2>
        <p>{content?.description && content?.description[0]}</p>
        <Form onSubmit={openMailLink}>
          <Input label="name" value={formValues.name} updateForm={(e: any) => updateFormValues("name", e)} />
          <Input label="phone" value={formValues.phone} updateForm={(e: any) => updateFormValues("phone", e)} />
          <Input label="email" value={formValues.email} updateForm={(e: any) => updateFormValues("email", e)} />
          <Input area label="message" value={formValues.message} updateForm={(e: any) => updateFormValues("message", e)} />
          <Button disabled={isDisabled} type="submit" value="SUBMIT" />
        </Form>
      </Mobile>
    </Section>
  )
}