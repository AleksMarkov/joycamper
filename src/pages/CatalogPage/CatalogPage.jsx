import React, { useState, useEffect } from 'react';
import HeaderCatalog from 'components/HeaderCatalog/HeaderCatalog.jsx';
import MainCatalog from 'components/MainCatalog/MainCatalog.jsx';
import SidebarCatalog from 'components/SidebarCatalog/SidebarCatalog.jsx';
import * as Styled from './CatalogPage.styled.jsx';

const CatalogPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the cards from the API
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

  return (
    <Styled.ContainerCatalog>
      <HeaderCatalog />
      <Styled.ContentWrapper>
        <Styled.MainContent>
          <MainCatalog />
        </Styled.MainContent>
        {!loading && (
          <Styled.SidebarContent>
            <SidebarCatalog cards={cards} />
          </Styled.SidebarContent>
        )}
      </Styled.ContentWrapper>
    </Styled.ContainerCatalog>
  );
};

export default CatalogPage;
