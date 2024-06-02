import React from 'react';
import CamperCard from 'components/CamperCard/CamperCard.jsx';
import * as Styled from './SidebarCatalog.styled.jsx';

const SidebarCatalog = ({ cards }) => {
  return (
    <Styled.SidebarContainer>
      {cards.map(card => (
        <CamperCard key={card.id} card={card} />
      ))}
    </Styled.SidebarContainer>
  );
};

export default SidebarCatalog;
