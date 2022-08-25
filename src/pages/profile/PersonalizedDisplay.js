import React,{useContext} from 'react';
import styled from "styled-components";
import profile_photo from "./pics/profile_photo.jpg";
import { StockContext } from "../../context/StockContext.js";
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,
} from "firebase/firestore";

function PersonalizedDisplay() {
    
    const { allStocksSymbols} = useContext(StockContext);
    console.log("allStocksSymbols: " , allStocksSymbols);
  return (
    <PhotoContainer>
          <h3 style={{color:"#5db8f0"}}> Welcome User!!</h3>
          <h3>Total value of shares : </h3><h2 style={{color:"rgb(21, 255, 0)"}}>$1,566,000</h2>
          <h4>You logged in at <span style={{textDecoration:"underline",textDecorationColor:"red"}}>09:30 pm</span> today</h4>
          <StockNamesContainer>
          </StockNamesContainer>              
    </PhotoContainer>
  )
}

export default PersonalizedDisplay;

const StockNamesContainer = styled.div``;

const PhotoContainer = styled.div`
/* flex: 0.5; */
  /* height: 530px; */
  /* flex-direction: row;
  justify-content: center;
  align-items: center; */
  border: 1px solid #42494d;
  border-radius: 5px;
  /* color:white; */
  width:400px;
  background-color:white;
  border:blue 2px solid;
  /* padding-left:90px; */
  /* padding-right: auto; */
  text-align: center;
  >h2{
    color:black;
  }
  >p{
    color:black;
  }
`;