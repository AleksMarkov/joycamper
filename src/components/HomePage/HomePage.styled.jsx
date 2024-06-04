import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  gap: 50px;
  padding: 100px;
  padding-top: 50px;
  background-color: #f9f9f9;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1440px) {
    flex-direction: column;
    padding: 50px;
  }

  @media (max-width: 779px) {
    padding: 25px;
  }

  @media (max-width: 369px) {
    padding: 10px;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 400px;
  flex-shrink: 0;
  height: 400px;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1440px) {
    flex-basis: 300px;
    height: 300px;
  }

  @media (max-width: 779px) {
    flex-basis: 200px;
    height: 200px;
  }

  @media (max-width: 369px) {
    flex-basis: 150px;
    height: 150px;
    margin-right: 0;
  }
`;

export const ContentContainer = styled.div`
  flex-basis: 400px;
  flex-shrink: 0;
  height: 400px;
  overflow: hidden;

  @media (max-width: 1440px) {
    flex-basis: 300px;
    height: 300px;
  }

  @media (max-width: 779px) {
    flex-basis: 200px;
    height: 200px;
  }

  @media (max-width: 369px) {
    flex-basis: 150px;
    height: 150px;
  }
`;

export const Heading = styled.div`
  text-align: right;
  font-size: 60px;
  font-weight: 600;
  margin-top: 120px;
  color: var(--button);
  padding-right: 30px;

  @media (max-width: 1440px) {
    font-size: 50px;
    margin-top: 100px;
  }

  @media (max-width: 779px) {
    font-size: 40px;
    margin-top: 80px;
    text-align: center;
    padding-right: 0;
  }

  @media (max-width: 369px) {
    font-size: 30px;
    margin-top: 60px;
  }
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 500;
  text-align: right;
  padding-right: 30px;
  color: #333;

  @media (max-width: 1440px) {
    font-size: 24px;
  }

  @media (max-width: 779px) {
    font-size: 20px;
    text-align: center;
    padding-right: 0;
  }

  @media (max-width: 369px) {
    font-size: 16px;
  }
`;
