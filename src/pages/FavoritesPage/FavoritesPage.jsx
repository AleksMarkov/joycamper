import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderFavorites from 'components/HeaderFavorites/HeaderFavorites';
import MainFavorites from 'components/MainFavorites/MainFavorites';
import Loader from 'components/Loader/Loader';
import {
  ContainerFavorites,
  ContentWrapper,
  MainContent,
  SidebarContent,
} from './FavoritesPage.styled';
import SidebarFavorites from 'components/SidebarFavorites/SidebarFavorites';
import { filterInterests } from '../../redux/cards/interestsSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.interests);

  useEffect(() => {
    dispatch(filterInterests({}));
  }, [dispatch]);

  return (
    <ContainerFavorites>
      <HeaderFavorites />
      {loading && <Loader />}
      <ContentWrapper>
        <MainContent>
          <MainFavorites />
        </MainContent>
        {!loading && (
          <SidebarContent>
            <SidebarFavorites />
          </SidebarContent>
        )}
      </ContentWrapper>
    </ContainerFavorites>
  );
};

export default FavoritesPage;
