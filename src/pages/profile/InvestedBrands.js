import React from 'react';
import styled from "styled-components";


function InvestedBrands() {
  return (
      <InvestedBrandsContainer>
           <h2 >You have invested in </h2>
          <StockCompanyNames>
              <p>Google</p>
              <p>Microsoft</p>
              <p>Apple</p>
              <p>Tesla</p>
              <p>Cisco</p>
              <p>Telcos</p>
              <p>BT</p>
              <p>MG Hector</p>
              <p>Lenovo</p>
              <p>Dell</p>
              <p>MSI</p>
              <p>IBM</p>
              <p>Alphabet</p>
              <p>Honda</p>
              <p>Deutschen Moteren</p>
          </StockCompanyNames>
    </InvestedBrandsContainer>
  )
}

export default InvestedBrands

const InvestedBrandsContainer = styled.div`
/* background-color:gray; */
>h2{
    color:white;
}
`;

const StockCompanyNames = styled.div`
width:980px;
display:flex;
flex-flow:row nowrap;
overflow: hidden;
overflow-x: scroll;
gap:10px;
/* border:1px blue solid; */
>p{
    color:white;
    padding-left:5px;
    padding-right:5px;
    font-size:20px;
    width:200px;
    background-color:#324194;

}
`;
