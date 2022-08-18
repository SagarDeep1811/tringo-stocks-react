import React,{useState ,useEffect} from "react";
import styled from "styled-components";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {

  const [buttonComponentBackgroundColor, setButtonComponentBackgroundColor] = useState({ "0": false, "1": false, "2": false, "3": false, "4": false });
  
  useEffect(() => {
    console.log("buttonComponentBackgroundColor : " , buttonComponentBackgroundColor);
   }, [buttonComponentBackgroundColor]);

  const changeButtonComponentColor = (buttonKey)=>(e) => {
    e.preventDefault();
    console.log("buttonKey : " , buttonKey);
      // setButtonComponentBackgroundColor({"0":0,"1":0,"2":0,"3":0,"4":0});
    setButtonComponentBackgroundColor(prev => ({ [buttonKey]: !prev[buttonKey] }));
  }

  return (
    <HeaderContainer>
      <MenuItems >
          <span buttonColor={buttonComponentBackgroundColor} onClick={changeButtonComponentColor("0")}>
          <Link
            style={{ textDecoration: "none", color:"white"
          }}
            to="/home"
          >
            Home
          </Link>
        </span>
          <span buttonColor = {buttonComponentBackgroundColor} onClick={changeButtonComponentColor("1")}>
          <Link
            style={{ textDecoration: "none", color:"white"
          }}
            to="/stockTracker"
          >
            Track
            </Link>
            </span>
          {/* <span  buttonColor = {buttonComponentBackgroundColor} onClick={changeButtonComponentColor("2")}>
          <Link
            style={{ textDecoration: "none", color:"white"}}
            to="/profile"
          >
            Profile
          </Link></span> */}
          <span  buttonColor = {buttonComponentBackgroundColor} onClick={changeButtonComponentColor("3")}>
          <Link
            style={{ textDecoration: "none", color:"white"}}
            to="/news"
          >
            News
          </Link></span>
          <span buttonColor = {buttonComponentBackgroundColor}  onClick={changeButtonComponentColor("4")}>
          <Link
            style={{ textDecoration: "none",color:"white"}}
            to="/account"
          >
            Account
          </Link></span>
      </MenuItems>
      <ThemesContainer>
        <LightModeOutlinedIcon />
        <DarkModeOutlinedIcon />
      
      </ThemesContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: var(--shallow-black);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 30px;
  width: 100%;
  position: fixed;
  margin-top:0;
  > .MuiSvgIcon-root {
    color: black;
    border: 1px solid black;
;
    border-radius: 2px;
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
    padding:5px 10px 5px 10px;
    border:1px solid black;
    border-radius:5px;
    background-color: transparent;
    opacity:0.6;
   } 
  > span:hover{
    background-color: var(--header-hover-background-color);
    /* transition: 0.5s; */
    opacity:1;
    cursor:pointer;
  }
`;

// const ButtonComponent = styled.div`
//   > button{
//     color: var(--header-text-color);
//       padding:5px 10px 5px 10px;
//       border:1px solid black;
//       border-radius:5px;
//       opacity:0.7;
//       background-color:${props=>props.buttonComponentBackgroundColor};
//   }
//   > button:hover{
//     background-color: var(--header-hover-background-color);
//     transition: 0.5s;
//     opacity:1;
//   }
// `;

const ThemesContainer = styled.div`
border:1px black solid;
border-radius:5px;
display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  margin-right: 20px;
  /* padding:5px 10px 5px 10px; */
  
  > .MuiSvgIcon-root {
    color: white;
    padding:5px;
    border-radius:5px;
    opacity:0.7;
  }
  
  > .MuiSvgIcon-root:hover{
  cursor:pointer;
  background-color:  var(--header-hover-background-color);
  opacity:1;
  }`
  ;