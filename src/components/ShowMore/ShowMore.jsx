import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import {
  Card,
  ScrollContainer,
  InfoContainer,
  TitleContainer,
  Title,
  ReviewsContainer,
  ReviewText,
  Location,
  Price,
  ImageContainer,
  Image,
  Description,
  ButtomContainer,
  TabButton
} from './ShowMore.styled.jsx';
import Features from './Features/Features.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Star from '../../assets/MYSVG/star.svg';
import Map from '../../assets/MYSVG/Map.svg';

const ShowMore = ({ card, showModal }) => {
  const [modalWidth, setModalWidth] = useState(984);
  const [activeTab, setActiveTab] = useState('Features');

  useEffect(() => {
    const updateModalWidth = () => {
      if (window.innerWidth < 984) {
        setModalWidth(window.innerWidth * 0.9); // Set modal width to 90% of window width if window width is smaller than modal width
      } else {
        setModalWidth(984);
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
      <Card>
        <ScrollContainer>
          <InfoContainer>
            <TitleContainer>
              <Title>{card.name}</Title>
              <ReviewsContainer>
                <img src={Star} alt="Star" width="16" height="16" />
                <ReviewText>{averageRating} ({card.reviews.length} Reviews)</ReviewText>
                <img src={Map} alt="Map point" width="16" height="16" />
                <Location>{card.location}</Location>
              </ReviewsContainer>
              <Price>{formattedPrice}</Price>
            </TitleContainer>
            <ImageContainer>
              {card.gallery.map((image, index) => (
                <Image key={index} src={image} alt={`Picture of ${card.name}`} />
              ))}
            </ImageContainer>
            <Description>{card.description}</Description>
          </InfoContainer>
          <ButtomContainer>
            <TabButton active={activeTab === 'Features'} onClick={() => setActiveTab('Features')}>
              Features
            </TabButton>
            <TabButton active={activeTab === 'Reviews'} onClick={() => setActiveTab('Reviews')}>
              Reviews
            </TabButton>
          </ButtomContainer>
          {activeTab === 'Features' && <Features card={card} />}
          {activeTab === 'Reviews' && <Reviews card={card} />}
        </ScrollContainer>
      </Card>
    </Modal>
  );
};

export default ShowMore;
