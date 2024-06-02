import React from 'react';
import * as Styled from './HeaderCatalog.styled.jsx';
import { Link } from 'react-router-dom';

const HeaderCatalog = () => {
  return (
    <Styled.TopBar>
      <Styled.ButtonContainer>
      <Link to="/">
        <Styled.Button>Home</Styled.Button>
      </Link>
      <Link to="/favorites">
        <Styled.Button>Favorites</Styled.Button>
      </Link>
      </Styled.ButtonContainer>
    </Styled.TopBar>
  );
};

export default HeaderCatalog;


