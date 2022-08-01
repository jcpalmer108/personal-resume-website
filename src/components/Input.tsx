import { silver_polish, fortress_gray } from "@/styles/variables"
import { ChangeEvent } from "react"
import styled from "styled-components"

type InputProps = {
  label: String,
  value?: any,
  updateForm: Function
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

`

const TextField = styled.input`
  padding: 0px 15px;
  height: 50px;
  border-radius: 0px;
  border: 1px solid ${silver_polish};
  z-index: 2;
  background: transparent;
`

const Label = styled.label`
  font-family: Gilroy-Medium;
  font-size: 12px;
  color: ${fortress_gray};
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 19px;
  transition: 0.2s ease all;
  background: white;
  z-index: 2;

  ${TextField}:not(:placeholder-shown) ~ & {
    top: -7px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }

  ${TextField}:focus ~ & {
    top: -7px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }


`

export default function Input({ label, value, updateForm}: InputProps) {
  console.log(value)
  return (
    <Wrapper>
      <TextField placeholder=" " value={value} onChange={(e: ChangeEvent) => updateForm(e)} />
      <Label>{label.toUpperCase()}</Label>
    </Wrapper>
  )
}