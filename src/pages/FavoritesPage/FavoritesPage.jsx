import React from 'react';
import HeaderFavorites from 'components/HeaderFavorites/HeaderFavorites.jsx';
import MainFavorites from 'components/MainFavorites/MainFavorites.jsx';
import * as Styled from './FavoritesPage.styled.jsx';
import SidebarFavorites from 'components/SidebarFavorites/SidebarFavorites.jsx';

const FavoritesPage = () => {
  
  return (
    <Styled.ContainerFavorites>
      <HeaderFavorites />
      <Styled.ContentWrapper>
      <Styled.MainContent>
      <MainFavorites />
        </Styled.MainContent>    
          <Styled.SidebarContent>
            <SidebarFavorites />
          </Styled.SidebarContent>
      </Styled.ContentWrapper>
    </Styled.ContainerFavorites>
  );
};

export default FavoritesPage;
