import React from 'react';
import HeaderCatalog from 'components/HeaderCatalog/HeaderCatalog.jsx';
import MainCatalog from 'components/MainCatalog/MainCatalog.jsx';
import * as Styled from './CatalogPage.styled.jsx';

const CatalogPage = () => {
  return (
    <Styled.ContainerCatalog>
      <HeaderCatalog />
      <MainCatalog />
    </Styled.ContainerCatalog>
  );
};

export default CatalogPage;
