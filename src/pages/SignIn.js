import React, {useState , useEffect , useContext} from 'react'
import styled from "styled-components";
import {Link , useNavigate} from "react-router-dom";
import { StockContext } from "../context/StockContext";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
function SignIn() {
  // const {email , password , setEmail , setPassword} = useContext(StockContext);
  let navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const logIn = async () => {
    try {
      const userLoggedIn = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("userLoggedIn : " , userLoggedIn);
    }
    catch (error)
    {
      console.log(error.message);
    }
    setLoginEmail("");
    setLoginPassword("");
    navigate("/home");
  }
 
  const handleEmail = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setLoginEmail(val);
  }
  const handlePassword = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setLoginPassword(val);
  }

    return (
      <SignInContainer>
    <LoginContainer>
    <h3>Log-In</h3>
        <InputFieldContainer>
            <p>E-mail</p>
            <input
            type="email"
            placeholder="..."
            onChange={handleEmail}
            value={loginEmail}
            name="email"
            required
            ></input>
        </InputFieldContainer>

        <InputFieldContainer>
            <p>Password</p>
            <input
            type="password"
              placeholder="..."
              onChange={handlePassword}
              value={loginPassword}
              name="password"
              required
            ></input>
        </InputFieldContainer>

        <SubmitButtonContainer>
            <button type="submit" onClick={logIn}>
            Sign-In
            </button>
        </SubmitButtonContainer>
          
        <p>New to Tringo ? <span className="border-gradient outermost-border-gradient"><Link style={{ textDecoration: "none", color: "white", border: "1px solid --var(shallow-black)", borderRadius: "2px", padding: "2px" }} to="/sign-up">Sign-Up</Link></span></p>
          
        </LoginContainer>
    </SignInContainer>
  )
}

export default SignIn;

const SignInContainer = styled.div`
margin-top:50px;
display:flex;
flex-flow:row nowrap;
justify-content:center;
`;

const LoginContainer = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:flex-end;
align-items:center;
/* position:absolute; */
border:#42494D solid 1px;
background-color:var(--shallow-black);
border-radius:5px;
padding:0 75px 10px 75px;
>p{
  color:white;
  font-size:13px;
  opacity:0.7;
}
>h3{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:20px;
  font-weight:normal;
  padding:2px;
  background: -webkit-linear-gradient(0deg , #5db8f0 , #5df0ba);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const InputFieldContainer = styled.div`
>p{
  color:white;
  opacity:0.6;
  /* text-align:center; */
}
>input[type=email]{
  width:195px;
  border:black 1px solid;
  border-radius:3px;
  height:25px;
  background-color:rgb(96, 94, 94);
  color:white;
  opacity:0.7;
  text-align:center;
}
>input[type=email]:focus{
  outline: none;
  opacity:1;
}
>input[type=password]{
  width:195px;
  border:black 1px solid;
  border-radius:3px;
  height:25px;
  background-color:rgb(96, 94, 94);
  color:white;
  opacity:0.7;
  text-align:center;
}
>input[type=password]:focus{
  outline: none;
  opacity:1;
}
`;

const SubmitButtonContainer = styled.div`
>p{
  color:white;
  opacity:0.6;
}
  >Button{
  background-color:black;
  width:200px;
  cursor:pointer;
  height:25px;
  text-align: center;
  color:white;
  border: black 1px solid;
  border-radius:3px;
  opacity:0.5;
  margin-top:20px;
  }
  >Button:hover{
    opacity:0.8;
  }
  `;