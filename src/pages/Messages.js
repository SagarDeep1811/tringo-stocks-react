import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Messages() {
  return (
  <MessagesContainer>
    <h1>Messages</h1>
      &nbsp;
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        Back to Home
      </Link>
  </MessagesContainer>
)
}

export default Messages;

const MessagesContainer = styled.div`
>h1{
  color:yellow;
}
margin:0;
position:fixed;
/* color:white */
`;