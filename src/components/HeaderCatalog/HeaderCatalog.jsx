import React from 'react';
import * as Styled from './HeaderCatalog.styled.jsx';
import { Link } from 'react-router-dom';

const HeaderCatalog = () => {
  return (
    <Styled.TopBar>
      <Styled.ButtonContainer>
      <Link to="/">
        <Styled.ButtonLeft>Home</Styled.ButtonLeft>
      </Link>
      <Link to="/favorites">
        <Styled.ButtonRight>Favorites</Styled.ButtonRight>
      </Link>
      </Styled.ButtonContainer>
    </Styled.TopBar>
  );
};

export default HeaderCatalog;


