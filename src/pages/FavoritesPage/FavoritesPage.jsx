import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderFavorites from 'components/HeaderFavorites/HeaderFavorites.jsx';
import MainFavorites from 'components/MainFavorites/MainFavorites.jsx';
import * as Styled from './FavoritesPage.styled.jsx';
import SidebarFavorites from 'components/SidebarFavorites/SidebarFavorites.jsx';
import { filterInterests } from '../../redux/cards/interestsSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterInterests({}));
  }, [dispatch]);

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

