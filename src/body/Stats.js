import React, { useState, useEffect, useContext } from 'react';
// Firebase stuff---------------------------------------
import { StockContext } from "../context/StockContext";
import { db } from '../firebase';
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,
} from "firebase/firestore";
import styled from 'styled-components'
import axios from "axios";
import StatsRow from "./StatsRow";
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Highcharts from "highcharts/highstock";
import HC_exporting from 'highcharts/modules/exporting';

Highcharts.theme = {
  colors: ['#058DC7', 'rgb(255, 204, 153)', '#00ff99', '#6AF9C4',  '#64E572',
           '#FF9655', '#FFF263', '#DDDF00'],
  chart: {
      backgroundColor:"transparent"
  },
  title: {
      style: {
          color: 'white',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  subtitle: {
      style: {
          color: 'rgb(217, 217, 217)',
          font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  legend: {
      itemStyle: {
          font: '9pt Trebuchet MS, Verdana, sans-serif',
          color: 'rgb(217, 217, 217)'
      },
      itemHoverStyle:{
          color: 'gray'
      }
  },
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

HC_exporting(Highcharts);

const testData = []; 

function Stats() {
  const {stockForNewsFeed , setStockForNewsFeed , sharesForNewsFeed, setSharesForNewsFeed , closingPriceForNewsFeed, setClosingPriceForNewsFeed , percentageForNewsFeed, setPercentageForNewsFeed,allStocksSymbols, setAllStocksSymbols,currentUserUid, setCurrentUserUid} = useContext(StockContext);

  const TOKEN  = process.env.REACT_APP_FINNHUB_API_KEY;
  const BASE_URL = process.env.REACT_APP_FINNHUB_QUOTE_URL;
  console.log("currentUserUid : ", currentUserUid);
// API call--
  const [displayState, setDisplayState] = useState("flex");
const [stocksData, setStocksData] = useState([]);
const [myStocks, setMyStocks] = useState([]);
const [newStockSymbol, setNewStockSymbol] = useState("");
const [sharesForNewStock, setSharesForNewStock] = useState("");
const usersCollectionRef = collection(db, currentUserUid);
  
  const handleDisplayAttribute = () => {
    if (displayState == "flex")
    {
      setDisplayState("none");
    }
    else
    {
      setDisplayState("flex"); 
    }
    console.log("displayState : " , displayState);
  }
  
const getStocksData = (stock)=>{
  return axios
  .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
  .catch((error)=>{
    console.error("Error : " , error.message);
  })
}

const getMyStocks = () => {
  db
  .collection(currentUserUid)
  .onSnapshot(snapshot => 
    {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(getStocksData(doc.data().ticker)
        .then(res => {
          tempData.push({
            id: doc.id,
            data: doc.data(),
            info: res.data
          })
        })
      )
    })
      Promise.all(promises).then(()=>{
        setMyStocks(tempData);
      })
   }
  )
}

  useEffect(() => {
      setAllStocksSymbols((myStocks));
   },[myStocks]);

  useEffect(() => {
    const tempStocksData=[]; 

    getMyStocks();
    let promises = [];
    myStocks.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      console.log(tempStocksData);
      setStocksData(tempStocksData);
    })
  }, []);

  const duplicateExists = (sym) => {
    const possibleDuplicatesArray = myStocks.map((stock, index) => {
      if (stock.data.ticker === sym) {
        return true;
      }
      return false;
    }
    );
    console.log("possibleDuplicatesArray : ", possibleDuplicatesArray);
    if (possibleDuplicatesArray.includes(true)) {
      return true;
    }

    return false
  }

  const addStocks = async (e) => {
    e.preventDefault();
    console.log("myStocks:  ", myStocks);
    if (duplicateExists(newStockSymbol))
    {
      console.log("You already possess a few shares for this stock.");
    }
    else {
      await addDoc(usersCollectionRef, { ticker: newStockSymbol, shares: sharesForNewStock });
      setNewStockSymbol("");
      setSharesForNewStock("");
    }
  }

  const handleNewStockSymbol = (e) => {
    e.preventDefault();
    const newSymbol = e.target.value;
    setNewStockSymbol(newSymbol);
  }

  const handleSharesForNewStock = (e) => {
    e.preventDefault();
    const shares = e.target.value;
    setSharesForNewStock(shares);
  }

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>My Stocks</p>
          <IconButton onClick={() =>
              handleDisplayAttribute()} style={{ color: "white" }}>
          <AddOutlinedIcon />
      </IconButton>
        </div>

        <StatsBuySharesContainer className="stats__buyShares__modal" displayAttribute={displayState}>
          <input type="text" value={newStockSymbol} style={{borderRadius:"0"}} id="stockSymbol" placeholder='Stock Symbol' onChange={handleNewStockSymbol} />
          <input type="text" value={sharesForNewStock} style={{borderRadius:"0"}} id="shares" placeholder='Shares' onChange={handleSharesForNewStock}/>
          <button onClick={addStocks} style={{borderRadius:"0", backgroundColor:"",padding:"0"}}>Buy</button>
        </StatsBuySharesContainer>

        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
)
}

export default Stats;

const StatsContainer = styled.div`
  color: var(--stats-text-color);
display:flex;
flex-direction:column;
flex:1;
align-items:center;
justify-content:center;
padding:20px;
background-color:var(--stats-background-color);
width:100%;
`;

const StatsBuySharesContainer = styled.div`
  display: ${(props)=>props.displayAttribute};
  flex-direction:column;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap:15px;
  border-bottom: 1px solid #768289;
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  color: white;
  background-color: var(--shallow-black);
/* display:none; */
`;