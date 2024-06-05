import React from 'react';
import { Link } from 'react-router-dom';
import {
  TopBar,
  ButtonContainer,
  ButtonLeft,
  ButtonRight
} from './HeaderCatalog.styled.jsx';

const HeaderCatalog = () => {
  return (
    <TopBar>
      <ButtonContainer>
        <Link to="/">
          <ButtonLeft>Home</ButtonLeft>
        </Link>
        <Link to="/favorites">
          <ButtonRight>Favorites</ButtonRight>
        </Link>
      </ButtonContainer>
    </TopBar>
  );
};

export default HeaderCatalog;



