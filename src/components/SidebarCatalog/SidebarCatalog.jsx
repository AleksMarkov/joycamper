import React, { useState } from 'react';
import CamperCard from 'components/CamperCard/CamperCard.jsx';
import * as Styled from './SidebarCatalog.styled.jsx';

const SidebarCatalog = ({ cards }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <Styled.SidebarContainer>
      {cards.slice(0, visibleCount).map(card => (
        <CamperCard key={card.id} card={card} />
      ))}
      {visibleCount < cards.length && (
        <Styled.LoadMoreButton onClick={handleLoadMore}>
          Load more
        </Styled.LoadMoreButton>
      )}
    </Styled.SidebarContainer>
  );
};

export default SidebarCatalog;
