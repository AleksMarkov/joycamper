import React from 'react';
import * as Styled from './HomePage.styled.jsx';
import campingImage from '../../images/logoOutline.svg';  

const HomePage = () => {
  return (
      <Styled.MainSection>
        <Styled.ImageContainer>
          <img src={campingImage} alt="Camping" /> 
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          <Styled.Heading>JoyCamper!</Styled.Heading>
          <Styled.Text>
          <em>Journey with Joy</em>
          </Styled.Text>
        </Styled.ContentContainer>
      </Styled.MainSection>
  );
};

export default HomePage;
