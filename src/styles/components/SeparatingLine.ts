import styled from "styled-components"
import { contentWidth, silver_polish } from "../variables"

type LineProps = {
  thin?: boolean,
  light?: boolean
}
export const Line = styled.hr<LineProps>`
  width: 100%;
  border-color: transparent;
  border-width: 1px;
  border-block-start: none;
  transition: all ease 1s;
  margin: 0px;
  
  @media (min-width: ${contentWidth}px) {
    border-color: ${props => props.light ? "white" : silver_polish};
    border-width: ${props => props.thin ? 0.5 : 1}px;
    transition: all ease 1s;
    position: absolute;
    left: 0px;
    margin: 0px;
  }

`
