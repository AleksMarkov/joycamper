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

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 444px;
  height: 530px;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  width: 444px;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 4px;

  @media (max-width: 779px) {
    padding: 0px 10px;
  }

  @media (max-width: 369px) {
    padding: 0px 5px;
  }
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

  @media (max-width: 779px) {
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 369px) {
    height: 30px;
    font-size: 12px;
  }
`;

export const ParamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 12px;
  border-bottom: 1px solid #E0E0E0;

  @media (max-width: 1440px) {
    font-size: 18px;
    padding-bottom: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 779px) {
    font-size: 16px;
  }

  @media (max-width: 369px) {
    font-size: 14px;
  }
`;

export const Param = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--main);

  @media (max-width: 1440px) {
    font-size: 16px;
  }

  @media (max-width: 779px) {
    font-size: 14px;
  }

  @media (max-width: 369px) {
    font-size: 12px;
  }
`;
