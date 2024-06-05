import React from 'react';
import { 
  InfoContainer, 
  ReviewsContainer, 
  ReviewItem, 
  Rating, 
  Avatar, 
  Stars, 
  ReviewerName, 
  StarContainer, 
  Star, 
  Comment 
} from './Reviews.styled.jsx';
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
      stars.push(<Star key={i} src={i < rating ? StarYes : StarNo} alt="Star" />);
    }
    return stars;
  };

  return (
    <InfoContainer>
      <ReviewsContainer>
        {card.reviews.map((review, index) => (
          <ReviewItem key={index}>
            <Rating>
              <Avatar>
                {getFirstLetter(review.reviewer_name)}
              </Avatar>
              <Stars>
                <ReviewerName>{review.reviewer_name}</ReviewerName>
                <StarContainer>
                  {renderStars(review.reviewer_rating)}
                </StarContainer>
              </Stars>
            </Rating>
            <Comment>{review.comment}</Comment>
          </ReviewItem>
        ))}
      </ReviewsContainer>
      <Booking />
    </InfoContainer>
  );
};

export default Reviews;
