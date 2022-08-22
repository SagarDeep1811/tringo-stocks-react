import React from 'react'
import styled from "styled-components";
import PersonalizedDisplay
 from './PersonalizedDisplay';
import StocksDetails from './StocksDetails';
import StockContextProvider from '../../context/StockContext';
import InvestedBrands from './InvestedBrands';

function Profile() {
  return (
    <StockContextProvider>
      <ProfileContainer>
      {/* <PersonalizedDisplayContainer> */}
        <PersonalizedDisplay />
      {/* </PersonalizedDisplayContainer> */}
      {/* <StocksDetailsContainer> */}
        <StocksDetails />
        {/* </StocksDetailsContainer> */}
      </ProfileContainer>
      <CompanyNamesContainer>
        <InvestedBrands />
      </CompanyNamesContainer>
      </StockContextProvider>
  )
}

export default Profile;

const CompanyNamesContainer = styled.div`
margin-top: 355px;
position:absolute;
display:block;
margin-left:130px;
border:#172c69 3px solid;
padding:10px;
background-color:#5db8f0;
width:984px;
border-radius:5px;

`;

const ProfileContainer = styled.div`
  position:absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: space-around; */
  /* width: 500px; */
  gap:200px;
  margin-top: 75px;
  margin-left: 130px;
`;

const StocksDetailsContainer = styled.div`
  /* flex: 0.69;
  height: 530px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #42494d;
  border-radius: 5px; */
`;

const PersonalizedDisplayContainer = styled.div`
  /* flex: 0.3;
  height: 530px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #42494d;
  border-radius: 5px; */
  /* background-color: var(--stats-background-color); */
`;
