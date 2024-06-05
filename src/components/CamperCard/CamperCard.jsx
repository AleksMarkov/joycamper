import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInterest, removeInterest } from '../../redux/cards/interestsSlice';
import {
  Card,
  ImageContainer,
  Image,
  InfoContainer,
  TitleContainer,
  Title,
  Price,
  IconWrapper,
  ReviewsContainer,
  ReviewText,
  Location,
  Description,
  FeaturesContainer,
  Feature,
  Item,
  ShowMoreButton
} from './CamperCard.styled.jsx';
import ShowMore from '../ShowMore/ShowMore'; 
import Star from '../../assets/MYSVG/star.svg';
import Map from '../../assets/MYSVG/Map.svg';
import Users from '../../assets/MYSVG/users.svg';
import Transmission from '../../assets/MYSVG/transmission.svg';
import Engine from '../../assets/MYSVG/engine.svg';
import Kitchen from '../../assets/MYSVG/kitchen.svg';
import Beds from '../../assets/MYSVG/beds.svg';
import AC from '../../assets/MYSVG/AC.svg';
import TV from '../../assets/MYSVG/TV.svg';
import WC from '../../assets/MYSVG/shower.svg';
import HartOff from '../../assets/MYSVG/hartOff.svg';
import HartOn from '../../assets/MYSVG/hartOn.svg';

const CamperCard = ({ card }) => {
  const dispatch = useDispatch();
  const interestingCards = useSelector(state => state.interests.interestingCards);
  const [showModal, setShowModal] = useState(false); 

  const isInteresting = interestingCards.some(interestingCard => interestingCard.id === card.id);

  const handleInterestClick = () => {
    if (isInteresting) {
      dispatch(removeInterest(card));
    } else {
      dispatch(addInterest(card));
    }
  };

  const ratings = card.reviews.map(review => review.reviewer_rating);
  const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  const formattedPrice = `€${parseFloat(card.price).toFixed(2).replace('.', ',')}`;

  return (
    <>
      <Card>
        <ImageContainer>
          <Image src={card.gallery[0]} alt="Picture_of_camper" />
        </ImageContainer>
        <InfoContainer>
          <TitleContainer>
            <Title>{card.name}</Title>
            <Price>{formattedPrice}</Price>
            <IconWrapper onClick={handleInterestClick}>
              <img src={isInteresting ? HartOn : HartOff} width="24" height="24" alt="Hart Icon" />
            </IconWrapper>
          </TitleContainer>
          <ReviewsContainer>
            <img src={Star} alt="Star" width="16" height="16" />
            <ReviewText>{averageRating} ({ratings.length} Reviews)</ReviewText>
            <img src={Map} alt="Map_point" width="16" height="16" />
            <Location>{card.location}</Location>
          </ReviewsContainer>
          <Description>{card.description}</Description>
          <FeaturesContainer>
            <Feature>
              <Item>
                <img src={Users} alt="Adults" width="20" height="20" />
                {card.adults} adults
              </Item>
            </Feature>
            <Feature>
              <Item>
                <img src={Transmission} alt="Transmission" width="20" height="20" />
                {card.transmission}
              </Item>
            </Feature>
            <Feature>
              <Item>
                <img src={Engine} alt="Engine" width="20" height="20" />
                {card.engine}
              </Item>
            </Feature>
            {card.details.kitchen === 1 && (
              <Feature>
                <Item>
                  <img src={Kitchen} alt="Kitchen" width="20" height="20" />
                  Kitchen
                </Item>
              </Feature>
            )}
            {card.details.beds > 0 && (
              <Feature>
                <Item>
                  <img src={Beds} alt="Beds" width="20" height="20" />
                  {card.details.beds} Beds
                </Item>
              </Feature>
            )}
            {card.details.TV > 0 && (
              <Feature>
                <Item>
                  <img src={TV} alt="TV" width="20" height="20" />
                  {card.details.TV} TV
                </Item>
              </Feature>
            )}
            {card.details.bathroom > 0 && (
              <Feature>
                <Item>
                  <img src={WC} alt="WC" width="20" height="20" />
                  {card.details.bathroom} WC
                </Item>
              </Feature>
            )}
            {card.details.airConditioner === 1 && (
              <Feature>
                <Item>
                  <img src={AC} alt="AC" width="20" height="20" />
                  AC
                </Item>
              </Feature>
            )}
          </FeaturesContainer>
          <ShowMoreButton onClick={() => setShowModal(true)}>Show more</ShowMoreButton>
        </InfoContainer>
      </Card>
      {showModal && <ShowMore card={card} showModal={setShowModal} />}
    </>
  );
};

export default CamperCard;

