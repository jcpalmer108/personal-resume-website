import { ChangeEvent } from "react"
import {
  TextField,
  TextArea,
  Label,
  Wrapper
} from "../styles/components/Input"
import { InputProps } from "../types/Input"


export default function Input({ label, value, updateForm, area}: InputProps) {
  console.log()
  return (
    <Wrapper>
      {area ? 
        (<TextArea placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />) : 
        (<TextField placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />)
      }
      <Label>{label.toUpperCase()}</Label>
    </Wrapper>
  )
}