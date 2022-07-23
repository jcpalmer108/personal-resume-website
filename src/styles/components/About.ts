import styled from "styled-components"
import { desktopBreakpoint, redstone, seashell_peach, tabletBreakpoint } from "../variables"

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  padding-bottom: 40px;
  
  @media (min-width: ${tabletBreakpoint}px) {
    padding-bottom: 0px;
  }

`

export const Title = styled.h2`
  padding-bottom: 20px;
`

export const Description = styled.p`
  margin: 0px;
  padding-bottom: 20px;

  &:last-child {
    padding-bottom: 0px;
  }

`

export const Schooling = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;

  @media(min-width: ${tabletBreakpoint}px) {
    min-width: fit-content;
    padding-left: 70px;
    padding-bottom: 0px;
  }

  @media(min-width: ${desktopBreakpoint}px) {
    min-width: 290px;
    padding-left: 60px;
  }

`

export const School = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: left; 
  justify-content: center;

  @media(min-width: ${tabletBreakpoint}px) {
    padding-top: 35px;
    font-size: 14px;
  }

`

export const Degree = styled.span`
  padding-top: 12px;

  @media (min-width: ${desktopBreakpoint}px) {
    padding-top: 10px;
    font-size: 14px;
  }

`

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 20px 15px;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    padding: 0px;
  }
`

export const Connect = styled.div`
  flex-grow: 2;
  background-color: ${seashell_peach};
  display: flex;
  height: 100px;
  flex-direction: column;
  padding: 25px 15px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 70px;
    padding: 40px;
  }
`

export const SocialLabel = styled.span`
  font-size: 20px;
  font-family: Butler-Regular;
  padding-bottom: 26px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 30px;
    padding-bottom: 20px;
  }
`

export const Socials = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 23px;

  @media (min-width: ${tabletBreakpoint}px) {
    justify-content: space-between;
    height: 20px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  justify-content: left;
  column-gap: 10px;
  width: 33%;
  font-family: Gilroy-Medium;

  @media (min-width: ${tabletBreakpoint}px) {
    width: fit-content;
    height: fit-content;
    justify-content: center;
  }
`

export const Icon = styled.img`
  height: 16px;
  width: 16px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 19px;
    width: 19px;
  }
`

export const Label = styled.span`
  font-size: 14px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 16px;
    padding-top: 4px;
  }
`

export const Prompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60px;
  background: ${redstone};
  padding: 20px;
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    width: 130px;
    height: 90px;
    padding: 30px;
  }
`

export const Question = styled.span`
  font-size: 16px;
  font-family: Butler-Medium;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 18px;
  }

`

export const StartProject = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-family: Gilroy-Medium;
  padding-top: 23px;
  padding-bottom: 7px;
  color: white;
  border-bottom: 1px solid white;

  }

`