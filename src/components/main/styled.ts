import styled from "styled-components";
// @ts-ignore
import { Plock } from "react-plock";

export const Wrap = styled.div`
  position: relative;
  background: coral;
  //width: 100vh;
  max-width: 1200px;
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  //height: 100vh;
`

export const WrapCards = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  align-items: center;
  scroll-snap-type: y mandatory;
  overflow: scroll;
`

export const CardMob = styled.div`
  scroll-snap-align: start;
`
export const PlockWrap = styled(Plock)`
`