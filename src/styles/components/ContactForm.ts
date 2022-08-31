import styled from "styled-components";
import { silver_polish, tabletBreakpoint } from "../variables";

export const Wrapper = styled.div`
  border-bottom: 0px;

  @media(min-width: ${tabletBreakpoint}px) {
    border-bottom: 1px solid ${silver_polish};

    &:last-child {
      border-bottom: 0px;
    }  
  }

`