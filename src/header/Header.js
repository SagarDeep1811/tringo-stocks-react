import React,{useState ,useEffect , useContext} from "react";
import styled from "styled-components";
import { Link,useNavigate  } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from "../firebase";
import BoltIcon from '@mui/icons-material/Bolt';
import { StockContext } from "../context/StockContext";

function Header() {
  const { currentUserUid, setCurrentUserUid ,username, setUsername } = useContext(StockContext);
  onAuthStateChanged(auth, (currentUser) => {
    // setUsername(currentUser.email);
  setUsername(currentUser?currentUser.email.slice(0,currentUser.email.indexOf("@")):"tepez1000");
  })

  let navigate = useNavigate();

  const logOut = async () => {
    const userLoggedOut = await signOut(auth);
    console.log("userLoggedOut : ", userLoggedOut);
    setUsername("tepez1000");
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setCurrentUserUid("myStocks");
    logOut();
    navigate("/sign-in");
  }

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
      {/* className="border-gradient outermost-border-gradient" */}
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
        
          <button
            style={{color:"white"}}
          to="/sign-in"
          onClick={handleLogOut}
          >
            Sign-Out
          </button>
{/*         
          <span buttonColor = {buttonComponentBackgroundColor}  onClick={changeButtonComponentColor("4")}>
          <Link
            style={{ textDecoration: "none",color:"white"}}
            to="/sign-up"
          >
            Sign-Up
          </Link></span> */}
        
      </MenuItems>
      <ThemesContainer>
        {/* <LightModeOutlinedIcon />
        <DarkModeOutlinedIcon /> */}
        <h4>tringo</h4>
        <BoltIcon />
        <p className="signOut-border-gradient outermost-border-gradient">{username}</p>
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
  >span{
    color: var(--header-text-color);
    padding:2px 10px 2px 10px;
    border:1px solid -var(shallow-black);
    border-radius:5px;
    background-color: transparent;
    opacity:0.8;
   } 
  > span:hover{
    background-color: var(--header-hover-background-color);
    /* transition: 0.5s; */
    opacity:1;
    cursor:pointer;
  }
  >button{
    color: var(--header-text-color);
    background-color: transparent;
    opacity:0.6;
    border:none;
    font-size: 14px;
   } 
  > button:hover{
    /* background-color: var(--header-hover-background-color); */
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
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 5px;
  
  >h4{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:20px;
    padding:2px;
    background: -webkit-linear-gradient(0deg, white, pink , purple, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  >p{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:12px;
    font-weight:normal;
    padding:2px;
    background: -webkit-linear-gradient(0deg, white,#5df0ba, #5db8f0 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  margin-right: 20px;
  
  > .MuiSvgIcon-root {
    color: yellow;
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