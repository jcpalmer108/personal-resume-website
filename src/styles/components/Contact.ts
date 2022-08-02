import styled from "styled-components"
import { desktopBreakpoint, redstone, silver_polish, tabletBreakpoint } from "../variables"
// import { silver_polish } from "../variables"

export const Mobile = styled.div`
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const NotMobile = styled.form`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}px) {

  }

`

export const FormWrapper = styled.form`

  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 1px solid ${silver_polish};

  }
`

export const InputWrapper = styled.form`
  padding-top: 2.5px;
  border-bottom: 1px solid ${silver_polish};

`


export const LeftWrapper = styled.div`
  padding: 35px 25px;
`


export const Title = styled.h2`

  @media (min-width: ${tabletBreakpoint}px) {
    width: 80%;
  }
`

export const Description = styled.p`

`



export const Left = styled.div`
  width: 55%;
  border-right: 1px solid ${silver_polish};

  `

export const Right = styled.div`
  flex-grow: 1;
  height: 100%;

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