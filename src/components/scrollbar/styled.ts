import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  right: 50px;
  top: 0px;
  height: 250px;
  padding: 1rem;
  overflow-y: auto;
  direction: ltr;
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 20px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #8070d4;
`