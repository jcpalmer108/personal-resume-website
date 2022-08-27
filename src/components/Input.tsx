import { ChangeEvent } from "react"
import { Label, TextArea, TextField, Wrapper } from "../styles/components/Input"
import { InputProps } from "../types/Input"

export default function Input({ label, value, updateForm, area, noBorder }: InputProps) {
  return (
    <Wrapper data-testid="Input">
      {area ? (<TextArea noBorder={noBorder} placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />) : (<TextField noBorder={noBorder} placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />)}
      <Label>{label.toUpperCase()}</Label>
    </Wrapper>
  )
}