import styled from "styled-components"

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0px;
  background: black;
  height: 100%;
  width: 100%;
  z-index: 998;
  opacity: 0.8;
`

export const Window = styled.div`
  position: fixed;
  top: 7.5%;
  left: 7.5%;
  height: 85%;
  width: 85%;
  background: white;
  opacity: 1;
  z-index: 999;
`

// export const CloseIcon
