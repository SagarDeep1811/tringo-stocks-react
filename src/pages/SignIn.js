import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function SignIn() {
    return (
      <SignInContainer>
    <LoginContainer>
    <h3>Log-In</h3>
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

        <SubmitButtonContainer>
            <button type="submit">
            Sign-In
            </button>
        </SubmitButtonContainer>
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