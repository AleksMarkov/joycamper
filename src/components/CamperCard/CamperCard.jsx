import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInterest, removeInterest } from '../../redux/cards/interestsSlice';
import * as Styled from './CamperCard.styled.jsx';
import ShowMore from '../ShowMore/ShowMore'; // Import ShowMore component
import Star from '../../images/MYSVG/star.svg';
import Map from '../../images/MYSVG/Map.svg';
import Users from '../../images/MYSVG/users.svg';
import Transmission from '../../images/MYSVG/transmission.svg';
import Engine from '../../images/MYSVG/engine.svg';
import Kitchen from '../../images/MYSVG/kitchen.svg';
import Beds from '../../images/MYSVG/beds.svg';
import AC from '../../images/MYSVG/AC.svg';
import TV from '../../images/MYSVG/TV.svg';
import WC from '../../images/MYSVG/shower.svg';
import HartOff from '../../images/MYSVG/hartOff.svg';
import HartOn from '../../images/MYSVG/hartOn.svg';

const CamperCard = ({ card }) => {
  const dispatch = useDispatch();
  const interestingCards = useSelector(state => state.interests.interestingCards);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
      <Styled.Card>
        <Styled.ImageContainer>
          <Styled.Image src={card.gallery[0]} alt="Picture_of_camper" />
        </Styled.ImageContainer>
        <Styled.InfoContainer>
          <Styled.TitleContainer>
            <Styled.Title>{card.name}</Styled.Title>
            <Styled.Price>{formattedPrice}</Styled.Price>
            <Styled.IconWrapper onClick={handleInterestClick}>
              <img src={isInteresting ? HartOn : HartOff} width="24" height="24" alt="Hart Icon" />
            </Styled.IconWrapper>
          </Styled.TitleContainer>
          <Styled.ReviewsContainer>
            <img src={Star} alt="Star" width="16" height="16" />
            <Styled.ReviewText>{averageRating} ({ratings.length} Reviews)</Styled.ReviewText>
            <img src={Map} alt="Map_point" width="16" height="16" />
            <Styled.Location>{card.location}</Styled.Location>
          </Styled.ReviewsContainer>
          <Styled.Description>{card.description}</Styled.Description>
          <Styled.FeaturesContainer>
            <Styled.Feature>
            <Styled.Item>
              <img src={Users} alt="Adults" width="20" height="20" />
              {card.adults} adults
            </Styled.Item>
            </Styled.Feature>
            <Styled.Feature>
            <Styled.Item>
              <img src={Transmission} alt="Transmission" width="20" height="20" />
              {card.transmission}
            </Styled.Item>
            </Styled.Feature>
            <Styled.Feature>
            <Styled.Item>
              <img src={Engine} alt="Engine" width="20" height="20" />
              {card.engine}
              </Styled.Item>
            </Styled.Feature>
            {card.details.kitchen === 1 && (
              <Styled.Feature>
                 <Styled.Item>
                <img src={Kitchen} alt="Kitchen" width="20" height="20" />
                Kitchen
                </Styled.Item>
              </Styled.Feature>
            )}
            {card.details.beds > 0 && (
              <Styled.Feature>
                 <Styled.Item>
                <img src={Beds} alt="Beds" width="20" height="20" />
                {card.details.beds} Beds
                </Styled.Item>
              </Styled.Feature>
            )}
            {card.details.TV > 0 && (
              <Styled.Feature>
                 <Styled.Item>
                <img src={TV} alt="TV" width="20" height="20" />
                {card.details.TV} TV
                </Styled.Item>
              </Styled.Feature>
            )}
            {card.details.bathroom > 0 && (
              <Styled.Feature>
                 <Styled.Item>
                <img src={WC} alt="WC" width="20" height="20" />
                {card.details.bathroom} WC
                </Styled.Item>
              </Styled.Feature>
            )}
            {card.details.airConditioner === 1 && (
              <Styled.Feature>
                 <Styled.Item>
                <img src={AC} alt="AC" width="20" height="20" />
                AC
                </Styled.Item>
              </Styled.Feature>
            )}
          </Styled.FeaturesContainer>
          <Styled.ShowMoreButton onClick={() => setShowModal(true)}>Show more</Styled.ShowMoreButton>
        </Styled.InfoContainer>
      </Styled.Card>
      {showModal && <ShowMore card={card} showModal={setShowModal} />}
    </>
  );
};

export default CamperCard;
