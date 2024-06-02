import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CamperCard from 'components/CamperCard/CamperCard.jsx';
import * as Styled from './SidebarFavorites.styled.jsx';

const SidebarFavorites = () => {
  const interestingCards = useSelector(state => state.interests.interestingCards);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <Styled.Container>
      {interestingCards.length > 0 ? (
        interestingCards.slice(0, visibleCount).map(card => (
          <CamperCard key={card.id} card={card} />
        ))
      ) : (
        <Styled.EmptyMessage>
          This page is for chosen campers. Please go to the <Styled.Highlight>Catalog Campers</Styled.Highlight> and choose the ones that interest you.
        </Styled.EmptyMessage>
      )}
      {visibleCount < interestingCards.length && (
        <Styled.LoadMoreButton onClick={handleLoadMore}>
          Load more
        </Styled.LoadMoreButton>
      )}
    </Styled.Container>
  );
};

export default SidebarFavorites;
