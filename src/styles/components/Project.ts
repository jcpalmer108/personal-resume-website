import styled from "styled-components";
import { silver_polish, tabletBreakpoint } from "../variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(min-width: ${tabletBreakpoint}px) {
    align-items: flex-start;
  }

`

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  border: 1px solid ${silver_polish};
  padding: 20px;

`

export const Title = styled.div`
  font-family: Gilroy-Regular;
  font-size: 14px;
  font-weight: bold;
  padding-top: 15px;

  @media(min-width: ${tabletBreakpoint}px) {
    padding-top: 0px;
  }

`
export const Industry = styled.div`
  font-family: Gilroy-Medium;
  color: ${silver_polish};
  font-size: 12px;
  padding-top: 10px;

  @media(min-width: ${tabletBreakpoint}px) {
    text-align: left;
  }

`

export const Description = styled.div`
  text-align: left;

`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  @media(min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 20px;
  }
`
export const TitleLine = styled.div`
  align-text: left;
`