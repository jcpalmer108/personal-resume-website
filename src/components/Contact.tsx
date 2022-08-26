import { useState } from "react";
import { ContactProps, FormProps } from "../types/Contact";
import { Mobile, FormWrapper, Button, NotMobile, Left, Right, Title, LeftWrapper, InputWrapper, BottomBar, Socials, Links, BlankSection, Icon } from "../styles/components/Contact"
import Input from "./Input"
import Section from "./Section";
import socials from "../assets/content/socials.json"

export default function Contact({ content, contact, formFieldValues }: ContactProps) {
  const [ formValues, setFormValues ] = useState<FormProps>(formFieldValues || {
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [ isDisabled, setIsDisabled ] = useState<boolean>(
    formValues.name === '' || 
    formValues.phone === '' || 
    formValues.email === '' || 
    formValues.message === ''
  )


  if(!content || !contact) {
    return null;
  }

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
            <Title>{content?.title}</Title>
            <p>{content?.description && content?.description[0]}</p>
            <Input label="Name" value={formValues.name} updateForm={(e: any) => updateFormValues("name", e)} />
            <Input label="Phone" value={formValues.phone} updateForm={(e: any) => updateFormValues("phone", e)} />
            <Input label="Email" value={formValues.email} updateForm={(e: any) => updateFormValues("email", e)} />
            <Input area label="Message" value={formValues.message} updateForm={(e: any) => updateFormValues("message", e)} />
            <Button data-testid="Submit" disabled={isDisabled} type="submit" value="SUBMIT" />
            <Socials>
              {
                socials.links.map((item) => (
                <Links data-testid="Links" key={item.key} href={item.url}>
                  <Icon src={require("../assets/images/socials/" + item.key + ".svg")} alt={item.label} />
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
                  <Icon src={require("../assets/images/socials/" + item.key + ".svg")} alt={item.label} />
                </Links>
                ))
              }
            </Socials>
            <Button data-testid="Submit" disabled={isDisabled} type="submit" value="SUBMIT" />
          </BottomBar>
        </NotMobile>
        <BlankSection data-testid="BlankSection"/>
      </Section>
    </div>
  )
}