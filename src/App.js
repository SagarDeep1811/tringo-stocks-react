import {useState} from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import styled from "styled-components";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

import Account from "./pages/Account";
import Cash from "./pages/Cash";
import Profile from "./pages/profile/Profile";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import News from "./pages/news/News";
import Portfolio from "./pages/Portfolio";
import StockTracker from "./pages/StockTracker.js";
import Registration from "./pages/SignUp";
import LogIn from "./pages/SignIn";

function App() {
  console.log(process.env);
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: grey[700],
      },
    },
  });


  return (
    <>
      {/* <Router> */}
        <Header/>
        
      <Routes>
        {/* <Route path="/" element={<Header/>}> */}
          <Route path="/home" element={<Home/>}/>
          
          <Route path="/profile" element={<Profile />} />
          
          <Route path="/account" element={<Account />} />
          
          <Route path="/cash" element={<Cash />} />
          
          <Route path="/messages" element={<Messages />} />
          
          <Route path="/news" element={<News />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          
          <Route path="/stockTracker" element={<StockTracker />} />
          
          <Route path="sign-up" element={<Registration />} />
        
          <Route path="sign-in" element={<LogIn/>} />

          <Route path="*" element={<Navigate replace to="/home" />} />
        
        {/* </Route> */}
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;

const HeaderContainer = styled.div`
@media only screen and (max-width: 900px) {
  background-color: var(--stats-background-color);
  display: flex;
  flex-direction: column ;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: var(--header-text-color);
  height: 60px;
  width: 100%;
  gap:10px;
  margin-top:0;
  position: fixed;
  border:solid 1px white;
  > .MuiSvgIcon-root {
    color:  "white";
    border: 2px solid black;
;
    border-radius: 5px;
  }
  }

background-color: #4c63af;
/* SVG -----------------------------------------*/
background-color: #02032A;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='38.4' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%235C5C5C' stroke-width='8.3' stroke-opacity='0.3'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
/* SVG------------------------------------------- */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom:solid 1px white;
  height: 30px;
  width: 100%;
  position: fixed;
  margin-top:0;
  > .MuiSvgIcon-root {
    color: white;
    border: 2px solid white;
;
    border-radius: 5px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  opacity: 1;
  border-radius: 6px;
  background-color: var(--searchbar-color);
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: blue;
  border: 1px "white" solid;
  width: 40vw;
  min-width: 258.4px;
  @media only screen and (max-width: 900px) {
    margin-top : 10px;
  }

  > div > input {
    padding: 5px 0 5px 10px;
    background-color: transparent;
    border: none;
    text-align: start;
    outline: none;
    width:35vw;
    color: var(--header-text-color);
    font-size: 15px;
    @media only screen and (max-width: 600px) {
    }
  }

  > .MuiSvgIcon-root {
    color: var(--header-icon-unselected-color);
  }
  > .MuiSvgIcon-root:hover {
    cursor: pointer;
    color: var(--header-icon-selected-color);
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  margin-right: 20px;
  >span{
    color: var(--header-text-color);
  }
  > span:hover{
    border-bottom:2px solid transparent;
  }
`;
