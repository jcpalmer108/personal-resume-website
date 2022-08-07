import { ContactProps } from "../types/Contact";
import Section from "./Section";
import { 
  Mobile, 
  FormWrapper,
  Button,
  NotMobile,
  Left,
  Right,
  Title,
  LeftWrapper,
  InputWrapper,
  BottomBar,
  Socials,
  Links,
  BlankSection,
  Icon
} from "../styles/components/Contact"
import Input from "./Input"
import { useState } from "react";
import socials from "../assets/content/socials.json"

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
    <div id="contact">
      <Section wide>
        <Mobile data-testid="Mobile" onSubmit={openMailLink}>
          <Section label={content?.label} center>
            <Title data-testid="Title">{content?.title}</Title>
            <p data-testid="Description">{content?.description && content?.description[0]}</p>
            <Input label="Name" value={formValues.name} updateForm={(e: any) => updateFormValues("name", e)} />
            <Input label="Phone" value={formValues.phone} updateForm={(e: any) => updateFormValues("phone", e)} />
            <Input label="Email" value={formValues.email} updateForm={(e: any) => updateFormValues("email", e)} />
            <Input area label="Message" value={formValues.message} updateForm={(e: any) => updateFormValues("message", e)} />
            <Button data-testid="Submit" disabled={isDisabled} type="submit" value="SUBMIT" />
            <Socials>
              {
                socials.links.map((item) => (
                <Links data-testid="Links" key={item.key} href={item.url}>
                  <Icon src={require("../assets/images/" + item.key + ".svg")} alt={item.label} />
                </Links>
                ))
              }
            </Socials>
          </Section>    
        </Mobile>
        <NotMobile data-testid="NotMobile">
          <FormWrapper>
            <Left>
              <Section noBorder noTop wide label={content?.label}>
                <LeftWrapper>
                  <Title data-testid="Title">{content?.title}</Title>
                  <p data-testid="Description">{content?.description && content?.description[0]}</p>
                </LeftWrapper>
              </Section>
            </Left>
            <Right>
              <InputWrapper>
                <Input 
                  noBorder 
                  label="Name" 
                  value={formValues.name} 
                  updateForm={(e: any) => updateFormValues("name", e)} 
                />
              </InputWrapper>
              <InputWrapper>
                <Input 
                  noBorder 
                  label="Phone" 
                  value={formValues.phone} 
                  updateForm={(e: any) => updateFormValues("phone", e)} 
                />
              </InputWrapper>
              <InputWrapper>
                <Input 
                  noBorder 
                  label="Email" 
                  value={formValues.email} 
                  updateForm={(e: any) => updateFormValues("email", e)} 
                />
              </InputWrapper>
              <InputWrapper>
                <Input 
                  noBorder 
                  area 
                  label="Message" 
                  value={formValues.message} 
                  updateForm={(e: any) => updateFormValues("message", e)} 
                />
              </InputWrapper>
            </Right>
          </FormWrapper>
          <BottomBar>
            <Socials data-testid="Socials">
              {
                socials.links.map((item) => (
                <Links key={item.key} href={item.url}>
                  <Icon src={require("../assets/images/" + item.key + ".svg")} alt={item.label} />
                </Links>
                ))
              }
            </Socials>
            <Button data-testid="Submit" disabled={isDisabled} type="submit" value="SUBMIT" />
          </BottomBar>
        </NotMobile>
        <BlankSection />
      </Section>
    </div>
  )
}