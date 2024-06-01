import React from 'react';
import * as Styled from './HeaderFavorites.styled.jsx';
import { Link } from 'react-router-dom';

const HeaderFavorites = () => {
  return (
    <Styled.TopBar>
      <Styled.ButtonContainer>
      <Link to="/">
        <Styled.Button>Home</Styled.Button>
      </Link>
      <Link to="/catalog">
        <Styled.Button>Catalog Campers</Styled.Button>
      </Link>
      </Styled.ButtonContainer>
    </Styled.TopBar>
  );
};

export default HeaderFavorites;

