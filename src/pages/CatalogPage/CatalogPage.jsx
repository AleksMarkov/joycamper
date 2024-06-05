import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdverts } from '../../redux/adverts/advertsOperation.js';
import HeaderCatalog from 'components/HeaderCatalog/HeaderCatalog.jsx';
import MainCatalog from 'components/MainCatalog/MainCatalog.jsx';
import SidebarCatalog from 'components/SidebarCatalog/SidebarCatalog.jsx';
import * as Styled from './CatalogPage.styled.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector((state) => state.adverts);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const handleSearch = (filters) => {
    const filtered = cards.filter((card) => {
      return (
        (!filters.acSelected || card.details.airConditioner === 1) &&
        (!filters.automaticSelected || card.transmission.toLowerCase() === 'automatic') &&
        (!filters.kitchenSelected || card.details.kitchen === 1) &&
        (!filters.tvSelected || card.details.TV === 1) &&
        (!filters.showerSelected || card.details.shower === 1) &&
        (!filters.location || card.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.selectedVehicle || card.form === filters.selectedVehicle)
      );
    });
    setFilteredCards(filtered);
    setFilterApplied(true);
  };

  const cardsToDisplay = filterApplied ? filteredCards : cards;

  return (
    <Styled.ContainerCatalog>
      <HeaderCatalog />
      <Styled.ContentWrapper>
        <Styled.MainContent>
          <MainCatalog onSearch={handleSearch} />
        </Styled.MainContent>
        {!loading && (
          <Styled.SidebarContent>
            <SidebarCatalog cards={cardsToDisplay} />
          </Styled.SidebarContent>
        )}
      </Styled.ContentWrapper>
    </Styled.ContainerCatalog>
  );
};

export default CatalogPage;
