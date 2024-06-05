import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 532px;

  @media (max-width: 1440px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 430px;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 100%;
  }
`;

export const ReviewItem = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  padding-bottom: 24px;

  @media (max-width: 779px) {
    font-size: 14px;
  }

  @media (max-width: 369px) {
    font-size: 12px;
  }
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
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--button);
  background: var(--block-features);
  margin-right: 16px;

  @media (max-width: 779px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 369px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const Stars = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--main);
  display: flex;
  flex-direction: column;

  @media (max-width: 779px) {
    font-size: 16px;
  }

  @media (max-width: 369px) {
    font-size: 14px;
  }
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

  @media (max-width: 779px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 369px) {
    width: 12px;
    height: 12px;
  }
`;

export const ReviewerName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: var(--main);

  @media (max-width: 779px) {
    font-size: 14px;
  }

  @media (max-width: 369px) {
    font-size: 12px;
  }
`;

export const Comment = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: var(--text);
  line-height: 1.5;

  @media (max-width: 779px) {
    font-size: 12px;
  }

  @media (max-width: 369px) {
    font-size: 10px;
  }
`;
