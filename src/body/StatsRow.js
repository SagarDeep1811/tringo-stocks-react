import React, { useContext } from "react";
import { StockContext } from "../context/StockContext";
import StockChart from './stock.svg';
import styled from "styled-components";

function StatsRow(props) {
  const { stockForNewsFeed, setStockForNewsFeed,sharesForNewsFeed, setSharesForNewsFeed , closingPriceForNewsFeed, setClosingPriceForNewsFeed , percentageForNewsFeed, setPercentageForNewsFeed } = useContext(StockContext);
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  const displayThisStock = [];

  const getModal = () => {
    displayThisStock.push(props.name);
    console.log("displayThisStock : ", displayThisStock);
    console.log("props.name : ", props.name);
    setStockForNewsFeed(props.name);
    console.log("stockForNewsFeed : ", stockForNewsFeed);
    console.log("typeof(props.volume) : ", typeof Number(props.volume));
    console.log("typeof(props.price) : ", typeof Number(props.price));
    console.log("typeof(percentage) : ", typeof Number(percentage));
    setSharesForNewsFeed(Number(props.volume));
    setClosingPriceForNewsFeed(Number(props.price));
    setPercentageForNewsFeed(Number(percentage));
  }

  return (
    <div className="row" onClick={getModal}>
      <LeftSectionStats>
        <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && 
          (props.volume + " shares")
        }</p>
      </div>
      </LeftSectionStats>
      <div className="row__chart">
        <img src={StockChart} height={16}/>
      </div>
      <RightSectionStats>
      <div className="row__numbers">
        <p className="row__price">${props.price}</p>
        <p className="row__percentage"> {Number(percentage).toFixed(2)>0?'+':''}{Number(percentage).toFixed(2)}%</p>
        </div>
        </RightSectionStats>
    </div>
  );
}

export default StatsRow;

const LeftSectionStats = styled.div`
>div:hover{
  color:white;
}
`;

const RightSectionStats = styled.div`
>div:hover{
  color:white;
}`;