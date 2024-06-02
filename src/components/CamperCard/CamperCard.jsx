import React from 'react';
import * as Styled from './CamperCard.styled.jsx';
import Star from '../../images/MYSVG/star.svg';
import Map from '../../images/MYSVG/Map.svg';
import Users from '../../images/MYSVG/users.svg';
import Transmission from '../../images/MYSVG/transmission.svg';
import Engine from '../../images/MYSVG/engine.svg';
import Kitchen from '../../images/MYSVG/kitchen.svg';
import Beds from '../../images/MYSVG/beds.svg';
import AC from '../../images/MYSVG/AC.svg';

const CamperCard = ({ card }) => {
   // Extract reviewer ratings and calculate the average
  const ratings = card.reviews.map(review => review.reviewer_rating);
  const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);


    // console.log(card)
    const formattedPrice = `€${parseFloat(card.price).toFixed(2)}`;

  return (
    <Styled.Card>
      <Styled.ImageContainer>
        <Styled.Image src={card.gallery[0]} alt="Picture_of_camper"  />
      </Styled.ImageContainer>
      <Styled.InfoContainer>
        <Styled.TitleContainer>
          <Styled.Title>{card.name}</Styled.Title>
          <Styled.Price>{formattedPrice}</Styled.Price>
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
                <img src={Users} alt="Adalts" width="20" height="20" />
                {card.adults} adults
            </Styled.Feature>
            <Styled.Feature>
                <img src={Transmission} alt="Transmission" width="20" height="20" />
                {card.transmission} 
            </Styled.Feature>
            <Styled.Feature>
                <img src={Engine} alt="Engine" width="20" height="20" />
                {card.engine} 
            </Styled.Feature>
            {card.details.kitchen === 1 && (
            <Styled.Feature>
              <img src={Kitchen} alt="Kitchen" width="20" height="20" />
              Kitchen
            </Styled.Feature>
          )}
          {card.details.beds > 0 && (
            <Styled.Feature>
              <img src={Beds} alt="Beds" width="20" height="20" />
              {card.details.beds} Beds
            </Styled.Feature>
          )}
          {card.details.airConditioner === 1 && (
            <Styled.Feature>
              <img src={AC} alt="AC" width="20" height="20" />
               AC
            </Styled.Feature>
          )}
        </Styled.FeaturesContainer>
        <Styled.ShowMoreButton>Show more</Styled.ShowMoreButton>
      </Styled.InfoContainer>
    </Styled.Card>
  );
};

export default CamperCard;
