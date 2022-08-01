import { ContactProps } from "../types/Contact";
import Section from "./Section";
import { 
  Mobile, 
  Form
} from "../styles/components/Contact"
import Input from "./Input"

export default function Contact({ content }: ContactProps) {

  return (
    <Section label={content?.label} center>
      <Mobile>
        <h2>{content?.title}</h2>
        <p>{content?.description && content?.description[0]}</p>
        <Form>
          <Input label="name" value=" " onChange={() => { console.log('hi') }} />
        </Form>
      </Mobile>
    </Section>
  )
}