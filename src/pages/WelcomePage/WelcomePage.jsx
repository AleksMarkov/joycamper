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
          <Styled.Button>Catalog Campers</Styled.Button>
        </Link>
        <Link to="/favorites">
          <Styled.Button>My Favorite Campers</Styled.Button>
        </Link>
      </Styled.ButtonContainer>
      <FooterPage />
    </Styled.Home>
  );
};

export default WelcomePage;
