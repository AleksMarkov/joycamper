import React from 'react';
import {
  Home,
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
} from './WelcomePage.styled.jsx';
import FooterPage from 'components/FooterPage/FooterPage';
import HomePage from 'components/HomePage/HomePage';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <Home>
      <HomePage />
      <ButtonContainer>
        <Link to="/catalog">
          <ButtonLeft>Catalogue</ButtonLeft>
        </Link>
        <Link to="/favorites">
          <ButtonRight>Favorites</ButtonRight>
        </Link>
      </ButtonContainer>
      <FooterPage />
    </Home>
  );
};

export default WelcomePage;
