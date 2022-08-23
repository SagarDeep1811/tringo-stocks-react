import React,{useState ,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
    <HeaderContainer className="border-gradient outermost-border-gradient">
      <MenuItems >
          <span className="signOut-border-gradient outermost-border-gradient" buttonColor={buttonComponentBackgroundColor} onClick={changeButtonComponentColor("0")}>
          <Link
            style={{ textDecoration: "none", color:"white"
          }}
            to="/home"
          >
            Home
          </Link>
        </span>
          <span className="signOut-border-gradient outermost-border-gradient" buttonColor = {buttonComponentBackgroundColor} onClick={changeButtonComponentColor("1")}>
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
          <span className="signOut-border-gradient outermost-border-gradient" buttonColor = {buttonComponentBackgroundColor} onClick={changeButtonComponentColor("3")}>
          <Link
            style={{ textDecoration: "none", color:"white",border:"1px solid --var(shallow-black)" , borderRadius:"2px" , padding:"2px"}}
            to="/news"
          >
            News
          </Link></span>
          {/* <span buttonColor = {buttonComponentBackgroundColor}  onClick={changeButtonComponentColor("4")}>
          <Link
            style={{ textDecoration: "none",color:"white"}}
            to="/account"
          >
            Account
          </Link></span> */}
        
          <span buttonColor = {buttonComponentBackgroundColor}  onClick={changeButtonComponentColor("4")}>
          <Link
            style={{ textDecoration: "none",color:"white"}}
            to="/sign-in"
          >
            Sign-Out
          </Link></span>
        
          <span buttonColor = {buttonComponentBackgroundColor}  onClick={changeButtonComponentColor("4")}>
          <Link
            style={{ textDecoration: "none",color:"white"}}
            to="/sign-up"
          >
            Sign-Up
          </Link></span>
        
      </MenuItems>
      <ThemesContainer>
        {/* <LightModeOutlinedIcon />
        <DarkModeOutlinedIcon /> */}
        <p>tringo</p>
      </ThemesContainer>
      <Outlet/>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  /* background-color: var(--shallow-black); */
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content:space-between;
  align-items: center;
  /* border-bottom: 1px solid var(--shallow-black); */
  width: 100%;
  margin:-15px 0 0 0;
  padding:0 0 0 0;
  > .MuiSvgIcon-root {
    color: black;
    border: 1px solid black;
    border-radius: 2px;
  }
  @media only screen and (max-width: 700px) {
    display:flex;
    flex-flow:column-reverse;
    justify-content:center;
    align-items:center;
    padding-top:0;
    gap:-100px;
    padding-bottom:5px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  /* margin-right: 20px; */
  >span{
    color: var(--header-text-color);
    padding:2px 10px 2px 10px;
    border:1px solid -var(shallow-black);
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
  /* border:1px black solid;
  border-radius:5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px; */
  >p{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:20px;
    padding:2px;
    /* background: -webkit-linear-gradient(
    rgb(243, 112, 182) ,
    rgb(219, 173, 241) ,
    rgb(132, 236, 198) ,
    rgb(243, 243, 112) ); */
    
  background: -webkit-linear-gradient(0deg, white, pink , purple, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  margin-right: 20px;
  
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