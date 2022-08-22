import React, { useContext } from "react";
import styled from "styled-components";
import LineGraph from "./LineGraph";
import { StockContext } from "../context/StockContext";

function NewsFeed() {
    const { stockForNewsFeed, setStockForNewsFeed,sharesForNewsFeed, setSharesForNewsFeed , closingPriceForNewsFeed, setClosingPriceForNewsFeed , percentageForNewsFeed, setPercentageForNewsFeed } = useContext(StockContext);
  return (
    <NewsFeedContainer>
          <NewsFeedPortfolio>
          <p>{stockForNewsFeed}</p>
              <h2>|</h2>
              <h3>$
                  {(sharesForNewsFeed * closingPriceForNewsFeed).toLocaleString("en-US")}
              </h3>
              <h2>|</h2>
              <p>
                  {
                      Math.sign(sharesForNewsFeed * percentageForNewsFeed) === 1 ? "+ ":"- "
                  }
                  $
                  {Math.abs(sharesForNewsFeed * percentageForNewsFeed).toFixed(2)}   
                  ({percentageForNewsFeed.toFixed(2)}%)
                  Today
              </p>
        </NewsFeedPortfolio>
        <NewsFeedChart>
            <LineGraph/>
        </NewsFeedChart>
    </NewsFeedContainer>
  )
}

export default NewsFeed;

const NewsFeedContainer = styled.div`
color:white;
display:flex;
flex-direction:column;
/* flex:1; */
align-items:center;
justify-content:center;
padding:0;
background-color: #42494D;
height:100%;
border-radius:5px;
border: 1px solid #42494D;
`;

const NewsFeedPortfolio = styled.div`
display:flex;
flex-direction:row;
margin-left:10px;
align-items:center;
justify-content:flex-start;
gap:20px;
>h2{
    color:brown;
}
>h3{
    color:var(--money-color);
    font-size:24px;
}
>p{
    color:var( --newsFeed-chart-color);
}

`;


const NewsFeedChart = styled.div``;