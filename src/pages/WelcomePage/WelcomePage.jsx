import React from 'react';
import * as Styled from './WelcomePage.styled.jsx';
import FooterPage from 'components/FooterPage/FooterPage.jsx';
import HomePage from 'components/HomePage/HomePage.jsx';

const WelcomePage = () => {
  
  return (
    <Styled.Home>
       <HomePage />       
       <Styled.ButtonContainer>
        <Styled.Button>Find My Camper</Styled.Button>
        <Styled.Button>Book Now</Styled.Button>
      </Styled.ButtonContainer>
      <FooterPage />
    </Styled.Home>
    );
  
};

export default WelcomePage;