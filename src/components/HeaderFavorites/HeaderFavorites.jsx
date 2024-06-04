import React from 'react';
import * as Styled from './HeaderFavorites.styled.jsx';
import { Link } from 'react-router-dom';

const HeaderFavorites = () => {
  return (
    <Styled.TopBar>
      <Styled.ButtonContainer>
        <Link to="/">
          <Styled.ButtonLeft>Home</Styled.ButtonLeft>
        </Link>
        <Link to="/catalog">
          <Styled.ButtonRight>Catalogue</Styled.ButtonRight>
        </Link>
      </Styled.ButtonContainer>
    </Styled.TopBar>
  );
};

export default HeaderFavorites;


