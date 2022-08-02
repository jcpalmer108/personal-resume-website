import styled from "styled-components"
import { redstone, silver_polish, tabletBreakpoint } from "../variables"
// import { silver_polish } from "../variables"

export const Mobile = styled.div`
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const NotMobile = styled.div`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const Form = styled.form`

`

export const LeftWrapper = styled.div`
  padding: 35px 25px;
`


export const Title = styled.h2`

`

export const Description = styled.p`

`



export const Left = styled.div`
  width: 55%;
  border: 1px solid ${silver_polish};
  `

export const Right = styled.div`
  flex-grow: 1;
  border: 1px solid ${silver_polish};
  border-left: none;

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