import React from 'react';
import { Link } from 'react-router-dom';
import {
  TopBar,
  ButtonContainer,
  ButtonLeft,
  ButtonRight
} from './HeaderFavorites.styled.jsx';

const HeaderFavorites = () => {
  return (
    <TopBar>
      <ButtonContainer>
        <Link to="/">
          <ButtonLeft>Home</ButtonLeft>
        </Link>
        <Link to="/catalog">
          <ButtonRight>Catalogue</ButtonRight>
        </Link>
      </ButtonContainer>
    </TopBar>
  );
};

export default HeaderFavorites;
