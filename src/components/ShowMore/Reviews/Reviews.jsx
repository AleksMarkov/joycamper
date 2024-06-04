import React from 'react';
import * as Styled from './Reviews.styled.jsx';
import Booking from '../Booking/Booking.jsx';
import StarYes from '../../../assets/MYSVG/star.svg';
import StarNo from '../../../assets/MYSVG/starno.svg';

const getFirstLetter = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase();
};

const Reviews = ({ card }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Styled.Star key={i} src={i < rating ? StarYes : StarNo} alt="Star" />);
    }
    return stars;
  };

  return (
    <Styled.InfoContainer>
      <Styled.ReviewsContainer>
        {card.reviews.map((review, index) => (
          <Styled.ReviewItem key={index}>
            <Styled.Rating>
              <Styled.Avatar>
                {getFirstLetter(review.reviewer_name)}
              </Styled.Avatar>
              <Styled.Stars>
                <Styled.ReviewerName>{review.reviewer_name}</Styled.ReviewerName>
                <Styled.StarContainer>
                  {renderStars(review.reviewer_rating)}
                </Styled.StarContainer>
              </Styled.Stars>
            </Styled.Rating>
            <Styled.Comment>{review.comment}</Styled.Comment>
          </Styled.ReviewItem>
        ))}
      </Styled.ReviewsContainer>
      <Booking />
    </Styled.InfoContainer>
  );
};

export default Reviews;
