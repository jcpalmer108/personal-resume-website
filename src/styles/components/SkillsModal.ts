import styled from "styled-components";
import { desktopBreakpoint, lively_coral, redstone } from "../variables";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
`

export const Section = styled.div`
  width: 33.33%;
  height: 286px;
`

export const CallToAction = styled(Section)`
  background: blue;
  background: ${redstone};
  display: none;
  
  @media(min-width: ${desktopBreakpoint}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`
export const Circle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${lively_coral};
`

export const Icon = styled.img`
  height: 25px;
`

export const Details = styled.div`
  color: white;
  font-family: Gilroy-Regular;
  font-size: 18px;
  weight: 600;
  padding-top: 15px;
  padding-bottom: 30px;
  max-width: 176px;
  text-align: center;

`

export const Action = styled.div`
  background: white;
  color: ${redstone};
  font-family: Gilroy-Medium;
  font-size: 10px;
  padding: 20px;
  max-width: 176px;
`