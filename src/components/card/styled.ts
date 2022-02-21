import styled from "styled-components";

export const CardWrap = styled.div`
  max-width: 350px;
  //min-width: 280px;
  min-width: 200px;
  background: darkcyan;
  border-radius: 10px;
  min-height: 150px;
  //height: 350px;
  //padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 2.5px 5px;
  scroll-snap-align: center;
`

export const Body = styled.div`
  //height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`


//Mob
export const Wrap = styled.div`
  scroll-snap-align: start;
`

  export const CardWrapMob = styled.div`
  height: calc(100vh - 70px);
  box-sizing: border-box;
  //max-width: 350px;
  //min-width: 280px;
  min-width: 200px;
  background: darkcyan;
  border-radius: 10px;
  //height: calc(100vh - 70px);
  //padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 2.5px 5px;
`