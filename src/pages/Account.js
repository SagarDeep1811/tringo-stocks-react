import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Account() {
  console.log("Account");
  return (
    <AccountContainer>
      <h1>Account</h1>
      &nbsp;
      <Link style={{ textDecoration: "none", color: "white" }} to="/home">
         Back to Home 
      </Link>
    </AccountContainer>
  )
}

export default Account;

const AccountContainer = styled.div`
>h1{
  color:yellow;
}
background-color:black;
margin-top:50px;
position:fixed;
`;