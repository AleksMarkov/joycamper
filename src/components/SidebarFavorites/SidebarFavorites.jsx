import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CamperCard from 'components/CamperCard/CamperCard';
import {
  Container,
  NotfoundMessage,
  EmptyMessage,
  Highlight,
  LoadMoreButton,
  CardsContainer,
} from './SidebarFavorites.styled';

const SidebarFavorites = () => {
  const interestingCards = useSelector(
    state => state.interests.interestingCards
  );
  const filteredCards = useSelector(state => state.interests.filteredCards);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <Container>
      <CardsContainer>
        {filteredCards.length > 0 ? (
          filteredCards
            .slice(0, visibleCount)
            .map(card => <CamperCard key={card.id} card={card} />)
        ) : interestingCards.length > 0 ? (
          <NotfoundMessage>No results found</NotfoundMessage>
        ) : (
          <EmptyMessage>
            This page is for chosen campers. Please go to the{' '}
            <Highlight>Catalog Campers</Highlight> and choose the ones that
            interest you.
          </EmptyMessage>
        )}
      </CardsContainer>
      {visibleCount < filteredCards.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      )}
    </Container>
  );
};

export default SidebarFavorites;
