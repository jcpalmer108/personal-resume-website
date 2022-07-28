import styled from "styled-components";
import { silver_polish, tabletBreakpoint } from "../variables";

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const Title = styled.h2`
  padding: 15px 15px 30px 15px;
  max-width: 250px;
`

export const Logo = styled.img`
  width: 50px;
`

export const Link = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid ${silver_polish};
  padding: 30px;
  margin-right: 13px;
`

export const Description = styled.div`
  padding: 30px 20px 50px 20px;
  font-family: Gilroy-Regular;

`

export const Paragraph = styled.p`
  margin-bottom: 16px;
  margin: 0px;
  font-size: 12px;
  line-height: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`


export const Row = styled.div`

`



export const Desktop = styled.div`
  display: none;
  
  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

`