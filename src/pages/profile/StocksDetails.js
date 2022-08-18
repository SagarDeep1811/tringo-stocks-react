import React from 'react';
import styled from "styled-components";

function StocksDetails() {
  return (

    <DetailsContainer>
      <div className="stats__buyShares__modal" >
        <select name="Brand" id="brands" style={{backgroundColor:"white", border:"none"}}>
            <option value="none" selected disabled hidden>Brand Name</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Apple">Apple</option>
          <option value="Tesla">Tesla</option>
          <option value="Cisco">Cisco</option>
          <option value="Telcos">Telcos</option>
          <option value="BT">Telcos</option>
          <option value="MG Hector">MG Hector</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Dell">Dell</option>
          <option value="MSI">MSI</option>
          <option value="IBM">IBM</option>
          <option value="Alphabet">Alphabet</option>
          <option value="Honda">Honda</option>
          <option value="Deutschen Moteren">Deutschen Moteren</option>
          
        </select>
              
              <input type="text"  id="shares" placeholder='Shares' />
              
        <button>+</button>
        <button>-</button>
      </div>
    </DetailsContainer>)
}

export default StocksDetails;

const DetailsContainer = styled.div`
>div >select{
    width:154px;
    height:33px;
    border-radius:7px;
    border:none;
    font-size:13px;
  }
  >div>button{
    padding:0;
  }
  border: 3px solid white;
  border-radius: 5px;
  width:400px;
`;
