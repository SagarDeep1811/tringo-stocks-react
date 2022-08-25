import React, { useState, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StockContext } from "../context/StockContext";
import { auth } from "../firebase";
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,
} from "firebase/firestore";
import {db} from '../firebase';

function SignUp() {
  const {currentUserUid, setCurrentUserUid,username, setUsername} = useContext(StockContext);
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [confirmedRegistrationPassword, setConfirmedRegistrationPassword] = useState("");
  const [unmatchedPasswordWarning, setUnmatchedPasswordWarning] = useState("none");
  const [alreadyInUseWarning, setAlreadyInUseWarning] = useState("none");
  
  const handleEmail = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setRegistrationEmail(val);
  }
  const handlePassword = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setRegistrationPassword(val);
  }

  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setConfirmedRegistrationPassword(val);
  }

  const register = async () => {
    if (registrationPassword === confirmedRegistrationPassword)
    {
      try {
        const user = await createUserWithEmailAndPassword(auth, registrationEmail, registrationPassword);
        // const newFirestoreDb = await 
        console.log("user : " , user);
        console.log("user.user.uid : ", user.user.uid);
        setCurrentUserUid(user.user.uid);
      }
      catch (error)
      {
        // if (error.message == "Firebase: Error (auth/email-already-in-use).")
        // {
        //   setAlreadyInUseWarning("block");
        // }
        console.log(error.message);
      }
      setUnmatchedPasswordWarning("none");
      setAlreadyInUseWarning("none");
    }
    else
    {
      setUnmatchedPasswordWarning("block");
    }
    setRegistrationEmail("");
    setRegistrationPassword("");
    setConfirmedRegistrationPassword("");
  }

  return (
  <SignUpContainer>
    <RegistrationContainer>
    <h3>Register</h3>
    {/* <div style={{
border:"black solid 1px",padding:"0 25px 0 25px"}}> */}
        <InputFieldContainer>
          <p>E-mail</p>
          <input
            type="email"
            placeholder="..." 
            onChange={handleEmail}
            value={registrationEmail}
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
            value={registrationPassword}
            name="password"
            required
          ></input>
        </InputFieldContainer>

        <InputFieldContainer>
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="..."
            onChange={handleConfirmedPassword}
            value={confirmedRegistrationPassword}
            name="password"
            required
          ></input>
        </InputFieldContainer>
        
        <SubmitButtonContainer>
          <button type="button" onClick={register}>
            Sign-Up
          </button>
        </SubmitButtonContainer>
        
        <p>Already registered ? <span className="border-gradient outermost-border-gradient"><Link style={{ textDecoration: "none", color:"white",border:"1px solid --var(shallow-black)" , borderRadius:"2px" , padding:"2px"}} to="/sign-in">Sign-In</Link></span></p>
        
        <UnmatchedPasswordWarningContainer displayStatus={unmatchedPasswordWarning}>
          <p style={{ textAlign: "left" }}>* Passwords don't match.</p>
        </UnmatchedPasswordWarningContainer>
{/* setAlreadyInUseWarning */}
        <AlreadyInUseEmailWarningContainer displayStatus={unmatchedPasswordWarning}>
          <p style={{ textAlign: "left" }}>* A user with the entered e-mail already exists.</p>
        </AlreadyInUseEmailWarningContainer>

      </RegistrationContainer>
    </SignUpContainer>
  )
}

export default SignUp;

const SignUpContainer = styled.div`
margin-top:5px;
display:flex;
flex-flow:row nowrap;
justify-content:center;
`;

const RegistrationContainer = styled.div`
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
  background: -webkit-linear-gradient(0deg, #5df0ba, #5db8f0 );
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

const UnmatchedPasswordWarningContainer = styled.div`
  display: ${(props) => props.displayStatus};
  >p{
    background: -webkit-linear-gradient(45deg,#f2aecc,#f2aeae,#c97777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AlreadyInUseEmailWarningContainer = styled.div`
display: ${(props) => props.displayStatus};
>p{
  background: -webkit-linear-gradient(45deg,#f2aecc,#f2aeae,#c97777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;
