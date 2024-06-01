import React from 'react';
import HeaderFavorites from 'components/HeaderFavorites/HeaderFavorites.jsx';
import MainFavorites from 'components/MainFavorites/MainFavorites.jsx';
import * as Styled from './FavoritesPage.styled.jsx';

const FavoritesPage = () => {
  return (
    <Styled.ContainerFavorites>
      <HeaderFavorites />
      <MainFavorites />
    </Styled.ContainerFavorites>
  );
};

export default FavoritesPage;
