import React from 'react';
import campingImage from '../../assets/MYSVG/logoOutline.svg';  
import {
  MainSection,
  ImageContainer,
  ContentContainer,
  Heading,
  Text
} from './HomePage.styled.jsx';

const HomePage = () => {
  return (
    <MainSection>
      <ImageContainer>
        <img src={campingImage} alt="Camping" /> 
      </ImageContainer>
      <ContentContainer>
        <Heading>JoyCamper!</Heading>
        <Text>
          <em>Journey with Joy</em>
        </Text>
      </ContentContainer>
    </MainSection>
  );
};

export default HomePage;
