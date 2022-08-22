import React from "react";
import NewsFeed from "./NewsFeed";
import Stats from "./Stats";
import styled from "styled-components";
import StockContextProvider from "../context/StockContext";

function Body() {
  return (
    <StockContextProvider>
    <BodyContainer>
      <NewsFeedContainer>
        <NewsFeed />
      </NewsFeedContainer>
      <StatsContainer>
        <Stats />
      </StatsContainer>
      </BodyContainer>
      </StockContextProvider>
  );
}

export default Body;

const BodyContainer = styled.div`
  /* position:absolute; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 55px;
  height: 100%;

  /* @media only screen and (max-width: 900px) {
    position:absolute;
    display:flex;
    gap:2px;
    width:100%;
    margin-top:50px;
    flex-direction:column;
    height:100%;
    } */
`;

const NewsFeedContainer = styled.div`
  flex: 0.69;
  /* border:1px solid var(--cool-cyan-shade); */
  height: 530px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StatsContainer = styled.div`
  flex: 0.3;
  /* border:1px solid var(--cool-cyan-shade); */
  height: 530px;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #42494d;
  border-radius: 5px;
  background-color: var(--stats-background-color);
`;
