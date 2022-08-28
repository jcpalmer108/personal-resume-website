import { ContactFormProps } from "../types/ContactForm";
import Input from "./Input";

export default function ContactForm({
  formValues,
  updateForm,
}: ContactFormProps) {
  return (
    <div data-testid="ContactForm">
      <Input
        label="Name"
        value={formValues.name}
        updateForm={(e: any) => updateForm("name", e)}
      />
      <Input
        label="Phone"
        value={formValues.phone}
        updateForm={(e: any) => updateForm("phone", e)}
      />
      <Input
        label="Email"
        value={formValues.email}
        updateForm={(e: any) => updateForm("email", e)}
      />
      <Input
        area
        label="Message"
        value={formValues.message}
        updateForm={(e: any) => updateForm("message", e)}
      />
    </div>
  );
}
