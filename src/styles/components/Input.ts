import styled from "styled-components"
import { silver_polish, fortress_gray } from "../../styles/variables"
import { NoBorderProps } from "../../types/Input"

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px 0px;

  `

export const TextArea = styled.textarea<NoBorderProps>`
  padding: 15px 15px;
  border-radius: 0px;

  border: ${ props => props.noBorder ? 'none' : `1px solid ${silver_polish}`};
  z-index: 2;
  background: transparent;
  font-family: Gilroy-Regular;
  height: 110px;
  resize: none;
  width: calc(100% - 30px);
  `

export const TextField = styled.input<NoBorderProps>`
  padding: 0px 15px;
  height: 50px;
  border-radius: 0px;
  border: ${ props => props.noBorder ? 'none' : `1px solid ${silver_polish}`};
  z-index: 2;
  background: transparent;
  font-family: Gilroy-Regular;
  `

export const Label = styled.label`
  font-family: Gilroy-Medium;
  font-size: 12px;
  color: ${fortress_gray};
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 30px;
  transition: 0.2s ease all;
  background: white;
  z-index: 2;

  ${TextField}:not(:placeholder-shown) ~ & {
    top: 3px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }

  ${TextField}:focus ~ & {
    top: 3px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }

  ${TextArea}:not(:placeholder-shown) ~ & {
    top: 3px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }

  ${TextArea}:focus ~ & {
    top: 3px;
    padding: 3px 15px;
    border-radius: 25px;
    font-size: 10px;
  }
  `