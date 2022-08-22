import styled from "styled-components";
import { tabletBreakpoint } from "../variables";

export const Wrapper = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media(min-width: ${tabletBreakpoint}px) {
    padding-top: 55px;
    width: 100%;
  }
`

export const Label = styled.div`
  font-family: Gilroy-Bold;
  font-size: 15px;

  @media(min-width: ${tabletBreakpoint}px) {
    font-size: 22px;
  }

`

export const Info = styled.p`
  font-family: Gilroy-Regular;
  font-size: 12px;
  margin: 0px;

  @media(min-width: ${tabletBreakpoint}px) {
    font-size: 16px;
  }

`
