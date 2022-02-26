import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  //position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  box-sizing: border-box;
  background: #1f1f1f;
  padding: 5px;
  min-height: 100vh;
  
  @media(max-width: 1070px){
    width: 85px;
  }
`

export const WrapContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 99;
  min-height: 100vh;
  
`
export const Nav = styled.div`
    margin-left: 10px;
    margin-top: 30px;
`