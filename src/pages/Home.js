import React from 'react'
import Header from "../header/Header";
import Body from "../body/Body";
import styled from "styled-components";
function Home() {
  return (
    <HomeContainer>
      <Body/>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
display:flex;
flex-flow:column nowrap;
width:100%;
/* position:absolute; */
`;