import { ContactFormProps } from "../types/ContactForm";
import Input from "./Input";
import { Wrapper } from "../styles/components/ContactForm";

export default function ContactForm({
  formValues,
  updateForm,
}: ContactFormProps) {
  return (
    <div data-testid="ContactForm">
      <Wrapper>
        <Input
          label="Name"
          value={formValues.name}
          updateForm={(e: any) => updateForm("name", e)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="Phone"
          value={formValues.phone}
          updateForm={(e: any) => updateForm("phone", e)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="Email"
          value={formValues.email}
          updateForm={(e: any) => updateForm("email", e)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          area
          label="Message"
          value={formValues.message}
          updateForm={(e: any) => updateForm("message", e)}
        />
      </Wrapper>
    </div>
  );
}
