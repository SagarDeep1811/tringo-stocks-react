import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Account() {
  console.log("Account");
  return (
    <AccountContainer>

      
    </AccountContainer>
  )
}

export default Account;

const AccountContainer = styled.div`
margin-top:50px;
display:flex;
flex-flow:row nowrap;
justify-content:center;
align-items:flex-start;
gap:40px;
`;

