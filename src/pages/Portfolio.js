import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Portfolio() {
  
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      &nbsp;
      <Link style={{ textDecoration: "none", color: "white" }} to="/home">
        Back to Home
      </Link>
    </PortfolioContainer>
  )
}

export default Portfolio;

const PortfolioContainer = styled.div`
>h1{
  color:yellow;
}
margin:0;
position:fixed;
/* color:white */
background-color:black;
`;