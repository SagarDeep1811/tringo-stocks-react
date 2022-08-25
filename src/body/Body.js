import React from "react";
import NewsFeed from "./NewsFeed";
import Stats from "./Stats";
import styled from "styled-components";

function Body() {
  return (
      <BodyContainer>
        <NewsFeedContainer>
          <NewsFeed />
        </NewsFeedContainer>
        <StatsContainer>
          <Stats />
        </StatsContainer>
      </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
position:absolute;
display:flex;
flex-direction:row;
align-items: start;
justify-content:flex-start;
gap:10px;
width:100%;
margin-top:5px;
  @media only screen and (max-width: 700px) {
    display:flex;
    flex-flow:column-reverse;
    justify-content:center;
    align-items:center;
    /* gap:1vh; */
  }
`;

const NewsFeedContainer = styled.div`
  flex: 0.69;
  /* border:1px solid var(--cool-cyan-shade); */
  height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StatsContainer = styled.div`
  flex: 0.3;
  /* border:1px solid var(--cool-cyan-shade); */
  height: 500px;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #42494d;
  border-radius: 5px;
  background-color: var(--stats-background-color);
`;
