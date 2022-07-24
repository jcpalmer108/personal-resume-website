import styled from "styled-components"
import { desktopBreakpoint, off_black, redstone, silver_polish, tabletBreakpoint } from "../variables"
import { DotProps, ArrowProps } from "../../types/Testimonials"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    max-width: 523px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    max-width: 624px;
  }
`

export const Quote = styled.p`
  margin: 30px 0px;
  font-size: 15px;
  font-family: Gilroy-Regular;
  height: fit-content; // update to change total height of section
  line-height: 26px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 20px;
    margin: 40px 0px;
    line-height: 34px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 25px;
    margin: 60px 0px;
    line-height: 44px;
  }
`

export const Person = styled.div`
  font-size: 16;
  font-family: Gilroy-Medium;
  margin-bottom: 10px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 24px;
    margin-bottom: 14px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 25px;
    margin-bottom: 11px;
  }
`

export const Title = styled.div`
  font-size: 12px;
  font-family: Gilroy-Regular;
  margin-bottom: 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 25px;
    margin-bottom: 55px;
  }
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.div<DotProps>`
  height: 7px;
  width: 7px;
  margin: 0px 7.5px;
  background: ${props => props.selected ? off_black : silver_polish};
  border-radius: 50%;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 10px;
    width: 10px;
    margin: 0px 9px;
  }

`


export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin-top: 30px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none; 
  }
`

export const ArrowLeft = styled.img<ArrowProps>`
  display: ${ props => props.desktop && props.desktop === true ? 'none' : 'block'}; 
  width: 19px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: ${ props => props.desktop && props.desktop === true ? 'block' : 'none'}; 
    width: 40px;
  }
`

export const ArrowRight = styled.img<ArrowProps>`
  display: ${ props => props.desktop && props.desktop === true ? 'none' : 'block'}; 
  width: 19px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: ${ props => props.desktop && props.desktop === true ? 'block' : 'none'}; 
    width: 40px;
  }
`

export const Circle = styled.div`
  background: ${redstone};
  opacity: 10%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: -1;
  position: absolute;
`
export const Option = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`