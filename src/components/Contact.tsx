import { useState } from "react";
import socials from "../assets/content/socials.json";
import {
  BlankSection,
  BottomBar,
  Button,
  FormWrapper,
  Icon,
  InputWrapper,
  Left,
  LeftWrapper,
  Links,
  Mobile,
  NotMobile,
  Right,
  Socials,
  Title,
} from "../styles/components/Contact";
import { ContactProps, FormProps } from "../types/Contact";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact({
  content,
  contact,
  formFieldValues,
}: ContactProps) {
  const [formValues, setFormValues] = useState<FormProps>(
    formFieldValues || { name: "", phone: "", email: "", message: "" }
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    formValues.name === "" ||
      formValues.phone === "" ||
      formValues.email === "" ||
      formValues.message === ""
  );

  if (!content || !contact) {
    return null;
  }

  const updateFormValues = (key: string, e: any) => {
    setFormValues({
      ...formValues,
      [key]: e.target.value,
    });
    updateIsDisabled();
  };

  const generateBody = () => {
    const body = [
      `Phone: ${formValues.phone}`,
      `Email: ${formValues.email}\n`,
      `Message: ${formValues.message}`,
    ];

    return encodeURI(body.join("\n"));
  };

  const resetFormValues = () => {
    setFormValues({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const openMailLink = (e: any) => {
    e.preventDefault();
    const emailSubject = encodeURI("NEW: Website Response");
    const url = `mailto:${
      contact.email
    }?subject=${emailSubject}&body=${generateBody()}`;
    window.open(url, "_blank");
    resetFormValues();
  };

  const updateIsDisabled = () => {
    const { name, phone, email, message } = formValues;
    setIsDisabled(
      name === "" || phone === "" || email === "" || message === ""
    );
  };

  return (
    <div id="contact" data-testid="Contact">
      <Section wide>
        <Mobile data-testid="Mobile" onSubmit={openMailLink}>
          <Section label={content?.label} center>
            <Title>{content?.title}</Title>
            <p>{content?.description && content?.description[0]}</p>
            <ContactForm
              formValues={formValues}
              updateForm={updateFormValues}
            />
            <Button
              data-testid="Submit"
              disabled={isDisabled}
              type="submit"
              value="SUBMIT"
            />
            <Socials>
              {socials.links.map((item) => (
                <Links data-testid="Links" key={item.key} href={item.url}>
                  <Icon
                    src={require("../assets/images/socials/" +
                      item.key +
                      ".svg")}
                    alt={item.label}
                  />
                </Links>
              ))}
            </Socials>
          </Section>
        </Mobile>
        <NotMobile data-testid="NotMobile">
          <FormWrapper>
            <Left>
              <Section noBorder noTop wide label={content?.label}>
                <LeftWrapper>
                  <Title data-testid="Title">{content?.title}</Title>
                  <p data-testid="Description">
                    {content?.description && content?.description[0]}
                  </p>
                </LeftWrapper>
              </Section>
            </Left>
            <Right>
              <InputWrapper>
                <ContactForm
                  formValues={formValues}
                  updateForm={updateFormValues}
                />
              </InputWrapper>
            </Right>
          </FormWrapper>
          <BottomBar>
            <Socials data-testid="Socials">
              {socials.links.map((item) => (
                <Links key={item.key} href={item.url}>
                  <Icon
                    src={require("../assets/images/socials/" +
                      item.key +
                      ".svg")}
                    alt={item.label}
                  />
                </Links>
              ))}
            </Socials>
            <Button
              data-testid="Submit"
              disabled={isDisabled}
              type="submit"
              value="SUBMIT"
            />
          </BottomBar>
        </NotMobile>
        <BlankSection data-testid="BlankSection" />
      </Section>
    </div>
  );
}
