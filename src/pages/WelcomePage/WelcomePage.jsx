import React from 'react';
import * as Styled from './WelcomePage.styled.jsx';
import FooterPage from 'components/FooterPage/FooterPage.jsx';
import HomePage from 'components/HomePage/HomePage.jsx';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <Styled.Home>
      <HomePage />
      <Styled.ButtonContainer>
        <Link to="/catalog">
          <Styled.ButtonLeft>Catalogue</Styled.ButtonLeft>
        </Link>
        <Link to="/favorites">
          <Styled.ButtonRight>Favorites</Styled.ButtonRight>
        </Link>
      </Styled.ButtonContainer>
      <FooterPage />
    </Styled.Home>
  );
};

export default WelcomePage;
