import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  padding-right: 20px;
  // padding-left: 20px;
  width: 984px;
  height: 720px;
  background: #FFFFFF;
  border-radius: 20px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 902px;
  height: 110px;
`;

export const Title = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const Price = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #101828;
`;

export const ReviewText = styled.div`
  padding-left: 4px;
  padding-right: 24px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Location = styled.div`
  padding-left: 8px;
`;

export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;

export const ButtomContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
  margin-bottom: 32px;
`;

export const TabButton = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  border: none;
  background: none;
  cursor: pointer;
  padding-top: 16px;
  padding-bottom: 24px;
  margin-right: 24px;
  border-bottom: ${props => (props.active ? '6px solid #E44848' : 'none')};

  &:focus {
    outline: none;
  }
`;
