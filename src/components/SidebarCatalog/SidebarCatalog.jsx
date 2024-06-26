import React, { useState } from 'react';
import CamperCard from 'components/CamperCard/CamperCard.jsx';
import {
  SidebarContainer,
  NoResultsMessage,
  LoadMoreButton,
  CardsContainer,
} from './SidebarCatalog.styled.jsx';

const SidebarCatalog = ({ cards }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <SidebarContainer>
      {cards.length === 0 ? (
        <NoResultsMessage>No results found</NoResultsMessage>
      ) : (
        <>
          <CardsContainer>
            {cards.slice(0, visibleCount).map(card => (
              <CamperCard key={card.id} card={card} />
            ))}
          </CardsContainer>
          {visibleCount < cards.length && (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      )}
    </SidebarContainer>
  );
};

export default SidebarCatalog;
