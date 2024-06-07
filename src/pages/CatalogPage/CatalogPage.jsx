import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdverts } from '../../redux/adverts/advertsOperation';
import HeaderCatalog from 'components/HeaderCatalog/HeaderCatalog';
import MainCatalog from 'components/MainCatalog/MainCatalog';
import SidebarCatalog from 'components/SidebarCatalog/SidebarCatalog';
import Loader from 'components/Loader/Loader';
import {
  ContainerCatalog,
  ContentWrapper,
  MainContent,
  SidebarContent,
} from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector(state => state.adverts);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const handleSearch = filters => {
    const filtered = cards.filter(card => {
      return (
        (!filters.acSelected || card.details.airConditioner === 1) &&
        (!filters.automaticSelected ||
          card.transmission.toLowerCase() === 'automatic') &&
        (!filters.kitchenSelected || card.details.kitchen === 1) &&
        (!filters.tvSelected || card.details.TV === 1) &&
        (!filters.showerSelected || card.details.shower === 1) &&
        (!filters.location ||
          card.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (!filters.selectedVehicle || card.form === filters.selectedVehicle)
      );
    });
    setFilteredCards(filtered);
    setFilterApplied(true);
  };

  const cardsToDisplay = filterApplied ? filteredCards : cards;

  return (
    <ContainerCatalog>
      <HeaderCatalog />
      {loading && <Loader />}
      <ContentWrapper>
        <MainContent>
          <MainCatalog onSearch={handleSearch} />
        </MainContent>
        {!loading && (
          <SidebarContent>
            <SidebarCatalog cards={cardsToDisplay} />
          </SidebarContent>
        )}
      </ContentWrapper>
    </ContainerCatalog>
  );
};

export default CatalogPage;
