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

  @media (min-width: ${tabletBreakpoint}px) {
    max-width: none;
    padding: 25px;
    width: 60%;
  }

`

export const Logo = styled.img`
  height: 50px;
  width: 50px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 70px;
    width: 70px;
  }
`

export const Link = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid ${silver_polish};
  padding: 30px;
  margin-right: 13px;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-right: 0px;
    padding: 0px;
    min-width: 145px;
    max-width: 145px;
    display: flex;
    align-items: center; 
    justify-content: center;
  }
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

export const NotMobile = styled.div`
  display: none;
  
  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

`

export const Mosaic = styled.div`

  @media(min-width: ${tabletBreakpoint}px) {
    display: block;
  }
`

export const Row = styled.div`
  display: inline-flex;
  height: 145px;
  overflow: hidden;
`

export const Action = styled.div`

`
