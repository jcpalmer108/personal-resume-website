import styled from "styled-components";

const menuBreakpoint = 700;

export const Image = styled.img`
  height: 40px;
  transition: all ease 1s;

  @media (min-width: ${menuBreakpoint}px) {
    height: 55px;
    transition: all ease 1s;
  }

`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: blue;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;
  transition: all ease 1s;

  @media (min-width: ${menuBreakpoint}px) {
    padding: 20px 60px;
    transition: all ease 1s;
  }

  `