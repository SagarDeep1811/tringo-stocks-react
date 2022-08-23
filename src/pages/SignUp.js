import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

function SignUp() {
  return (
  <SignUpContainer>
    <RegistrationContainer>
    <h3>Register</h3>
    {/* <div style={{
border:"black solid 1px",padding:"0 25px 0 25px"}}> */}
        <InputFieldContainer>
          <p>Username</p>
          <input
            type="text"
            placeholder="..."
          ></input>
        </InputFieldContainer>

        <InputFieldContainer>
          <p>Password</p>
          <input
            type="text"
            placeholder="..."
          ></input>
        </InputFieldContainer>

        <InputFieldContainer>
          <p>Confirm password</p>
          <input
            type="text"
            placeholder="..."
          ></input>
        </InputFieldContainer>

        <SubmitButtonContainer>
          <button type="submit">
            Sign-Up
          </button>
        </SubmitButtonContainer>
        
        <p>Already registered ? <span className="border-gradient outermost-border-gradient">Sign-In</span></p>
        {/* </div> */}
      </RegistrationContainer>
    </SignUpContainer>
  )
}

export default SignUp;

const SignUpContainer = styled.div`
margin-top:50px;
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
>input[type=text]{
  width:195px;
  border:black 1px solid;
  border-radius:3px;
  height:25px;
  background-color:rgb(96, 94, 94);
  color:white;
  opacity:0.7;
  text-align:center;
}
>input[type=text]:focus{
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
  width:195px;
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