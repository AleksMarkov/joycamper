import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CamperCard from 'components/CamperCard/CamperCard';
import * as Styled from './SidebarFavorites.styled';

const SidebarFavorites = () => {
  const interestingCards = useSelector(state => state.interests.interestingCards);
  const filteredCards = useSelector(state => state.interests.filteredCards);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <Styled.Container>
      {filteredCards.length > 0 ? (
        filteredCards.slice(0, visibleCount).map(card => (
          <CamperCard key={card.id} card={card} />
        ))
      ) : interestingCards.length > 0 ? (
        <Styled.NotfoundMessage>
          No results found
        </Styled.NotfoundMessage>
      ) : (
        <Styled.EmptyMessage>
          This page is for chosen campers. Please go to the <Styled.Highlight>Catalog Campers</Styled.Highlight> and choose the ones that interest you.
        </Styled.EmptyMessage>
      )}
      {visibleCount < filteredCards.length && (
        <Styled.LoadMoreButton onClick={handleLoadMore}>
          Load more
        </Styled.LoadMoreButton>
      )}
    </Styled.Container>
  );
};

export default SidebarFavorites;
