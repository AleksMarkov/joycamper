import React, { useState, useEffect } from 'react';
import HeaderCatalog from 'components/HeaderCatalog/HeaderCatalog.jsx';
import MainCatalog from 'components/MainCatalog/MainCatalog.jsx';
import SidebarCatalog from 'components/SidebarCatalog/SidebarCatalog.jsx';
import * as Styled from './CatalogPage.styled.jsx';

const CatalogPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch('https://665b72a0003609eda460e874.mockapi.io/api/adverts')
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (filters) => {
    const filtered = cards.filter(card => {

      return (
        (!filters.acSelected || card.details.airConditioner > 0) &&
        (!filters.automaticSelected || card.transmission.toLowerCase() === 'automatic') &&
        (!filters.kitchenSelected || card.details.kitchen > 0) &&
        (!filters.tvSelected || card.details.TV === 1) &&
        (!filters.showerSelected || card.details.shower > 0) &&
        (!filters.location || card.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.selectedForms.length === 0 || filters.selectedForms.includes(card.form))
      );
    });
    setFilteredCards(filtered);
  };

  return (
    <Styled.ContainerCatalog>
      <HeaderCatalog />
      <Styled.ContentWrapper>
        <Styled.MainContent>
          <MainCatalog onSearch={handleSearch} />
        </Styled.MainContent>
        {!loading && (
          <Styled.SidebarContent>
            <SidebarCatalog cards={filteredCards.length ? filteredCards : cards} />
          </Styled.SidebarContent>
        )}
      </Styled.ContentWrapper>
    </Styled.ContainerCatalog>
  );
};

export default CatalogPage;
