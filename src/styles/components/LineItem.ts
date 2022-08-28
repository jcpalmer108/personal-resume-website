import styled from "styled-components";
import { desktopBreakpoint, silver_polish } from "../variables";

export const Icon = styled.img`
  height: 20px;
`;

export const Info = styled.div`
  font-family: Gilroy-Regular;
  font-size: 18px;

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 16px;
  }
`;

export const Line = styled.div`
  display: flex;
  column-gap: 15px;
  padding: 7px 50px;

  &:last-child {
    padding-bottom: calc(35px - 7px);
  }
`;

export const Subtitle = styled.div`
  font-family: Gilroy-Regular;
  font-size: 11px;
  color: ${silver_polish};
  padding-top: 3px;
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
