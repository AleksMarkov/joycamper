import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  width: 888px;
  height: 358px;
  background: #FFFFFF;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  width: 290px;
  height: 310px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 526px;
  height: 310px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  height: 30px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--main);
  width: 340px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  width: 140px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--main);
`;

export const IconWrapper = styled.div`
  width: 24px;
  cursor: pointer;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 5px;
  width: 526px;
  height: 24px;
`;

export const ReviewText = styled.div`
  width: 133px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`;

export const Location = styled.div`
  width: 350px;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--main);
`;

export const Description = styled.div`
  width: 525px;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  width: 528px;
  height: 44px;
  margin-bottom: 64px;
`;

export const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
 padding: 0px 20px;
 gap: 4px;
`;

export const Feature = styled.div`
  border-radius: 100px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--block-features);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--main);
`;

export const ShowMoreButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 40px;
  gap: 10px;
  width: 166px;
  height: 56px;
  background: var(--button);
  border-radius: 200px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #d84343;
  }
`;
