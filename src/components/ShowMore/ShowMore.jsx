import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import * as Styled from './ShowMore.styled.jsx';
import Features from './Features/Features.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Star from '../../images/MYSVG/star.svg';
import Map from '../../images/MYSVG/Map.svg';

const ShowMore = ({ card, showModal }) => {
  const [modalWidth, setModalWidth] = useState(400);
  const [activeTab, setActiveTab] = useState('Features');

  useEffect(() => {
    const updateModalWidth = () => {
      if (window.innerWidth < 768) {
        setModalWidth(982);
      } else {
        setModalWidth(982);
      }
    };
    updateModalWidth();
    window.addEventListener('resize', updateModalWidth);

    return () => {
      window.removeEventListener('resize', updateModalWidth);
    };
  }, []);

  const averageRating = card.reviews && card.reviews.length > 0
    ? (card.reviews.reduce((acc, review) => acc + review.reviewer_rating, 0) / card.reviews.length).toFixed(1)
    : 'No ratings';
  const formattedPrice = `€${parseFloat(card.price).toFixed(2).replace('.', ',')}`;

  return (
    <Modal width={modalWidth} height={720} onClose={() => showModal(false)}>
      <Styled.Card>
        <Styled.ScrollContainer>
          <Styled.InfoContainer>
            <Styled.TitleContainer>
              <Styled.Title>{card.name}</Styled.Title>
              <Styled.ReviewsContainer>
                <img src={Star} alt="Star" width="16" height="16" />
                <Styled.ReviewText>{averageRating} ({card.reviews.length} Reviews)</Styled.ReviewText>
                <img src={Map} alt="Map point" width="16" height="16" />
                <Styled.Location>{card.location}</Styled.Location>
              </Styled.ReviewsContainer>
              <Styled.Price>{formattedPrice}</Styled.Price>
            </Styled.TitleContainer>
            <Styled.ImageContainer>
              {card.gallery.map((image, index) => (
                <Styled.Image key={index} src={image} alt={`Picture of ${card.name}`} />
              ))}
            </Styled.ImageContainer>
            <Styled.Description>{card.description}</Styled.Description>
          </Styled.InfoContainer>
        <Styled.ButtomContainer>
          <Styled.TabButton active={activeTab === 'Features'} onClick={() => setActiveTab('Features')}>
            Features
          </Styled.TabButton>
          <Styled.TabButton active={activeTab === 'Reviews'} onClick={() => setActiveTab('Reviews')}>
            Reviews
          </Styled.TabButton>
        </Styled.ButtomContainer>
        {activeTab === 'Features' && <Features card={card} />}
        {activeTab === 'Reviews' && <Reviews card={card} />}
        </Styled.ScrollContainer>
      </Styled.Card>
    </Modal>
  );
};

export default ShowMore;
