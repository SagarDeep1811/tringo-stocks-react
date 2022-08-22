import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Cash() {
  return (
    <CashContainer>
      <h1>Cash</h1>
      &nbsp;
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        Back to Home
      </Link>
      </CashContainer>
  )
}

export default Cash;

const CashContainer = styled.div`
>h1{
  color:yellow;
}
background-color:black;
margin:0;
position:fixed;
/* color:white */
`;