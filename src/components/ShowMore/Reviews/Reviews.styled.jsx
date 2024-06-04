import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 532px;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 430px;
  width: 100%;
`;

export const ReviewItem = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  // border-bottom: 1px solid #E0E0E0;
  padding-bottom: 24px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Avatar = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #e44848;
  background: #f2f4f7;
  margin-right: 16px;
`;

export const Stars = styled.div`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 18px;
line-height: 1.33333;
color: #101828;
  display: flex;
  flex-direction: column;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const Star = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const ReviewerName = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #101828;
`;

export const ReviewerRating = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #667085;
`;

export const Comment = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #475467;
  line-height: 1.5;
`;

