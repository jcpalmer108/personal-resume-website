import styled from "styled-components"
import { redstone } from "../variables"
// import { silver_polish } from "../variables"

export const Mobile = styled.div`
  text-align: center;
`

export const Form = styled.form`

`

export const Button = styled.input`
  border: none;
  background: ${redstone};
  width: 100%;
  font-size: 12px;
  color: white;
  height: 50px;
  font-family: Gilroy-Medium;
  font-size: 12px;
  line-spacing: 27px;
  letter-spacing: 2px;

  &:disabled {
    opacity: 0.3;
  }
`