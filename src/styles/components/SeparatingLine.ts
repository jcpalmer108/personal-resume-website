import styled from "styled-components"
import { contentWidth, silver_polish, tabletBreakpoint } from "../variables"
import { SeparatingLineProps as LineProps } from '../../types/SeparatingLine'

export const Line = styled.hr<LineProps>`
  width: 100%;
  border-color: transparent;
  border-width: 1px;
  border-block-start: none;
  margin: 0px;
  
  @media (min-width: ${tabletBreakpoint}px) {
    border-color: ${props => props.light ? "white" : silver_polish};
    border-width: ${props => props.thin ? 0.5 : 1}px;
    position: absolute;
    left: 0px;
    margin: 0px;
  }

`
