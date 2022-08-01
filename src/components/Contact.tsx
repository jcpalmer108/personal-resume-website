import { ContactProps } from "../types/Contact";
import Section from "./Section";
import { 
  Mobile, 
  Form
} from "../styles/components/Contact"

export default function Contact({ content }: ContactProps) {
  return (
    <Section label={content?.label}>
      <Mobile>
        <h2>{content?.title}</h2>
        <p>{content?.description && content?.description[0]}</p>
        <Form>

        </Form>
      </Mobile>
    </Section>
  )
}