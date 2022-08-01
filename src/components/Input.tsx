import { ChangeEvent } from "react"
import {
  TextField,
  Label,
  Wrapper
} from "../styles/components/Input"
import { InputProps } from "../types/Input"


export default function Input({ label, value, updateForm}: InputProps) {
  console.log(value)
  return (
    <Wrapper>
      <TextField placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />
      <Label>{label.toUpperCase()}</Label>
    </Wrapper>
  )
}