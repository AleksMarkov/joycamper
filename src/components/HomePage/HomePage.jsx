import React from 'react';
import * as Styled from './HomePage.styled.jsx';
import campingImage from '../../images/camping.jpg';  

const HomePage = () => {
  return (
      <Styled.MainSection>
        <Styled.ImageContainer>
          <img src={campingImage} alt="Camping" /> 
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          <Styled.Heading>Welcome to JoyCamper!</Styled.Heading>
          <Styled.Text>
            Our company provides a large selection of campers. Our camper will allow you to travel without a strict schedule. You can stop at different places of your choice and change your route at any time. Modern campers provided by our company are equipped with everything necessary for a comfortable stay: kitchen, bathroom, and sleeping places. This allows you to feel at home, even while on the road. With a campervan rental, you can enjoy time in nature without sacrificing amenities. Wake up at the foot of the mountains or on the shore of a lake and immerse yourself in natural beauty. Renting a campervan is often more economical than traditional vacation rentals like hotels or resorts, especially if you're traveling with a large group or family. Our campers are ideal for long trips around the country or even across multiple countries, offering convenience and independence from hotel schedules and transport. Renting a campervan from our company is a great way to explore new places while enjoying freedom, comfort, and nature. This is an adventure that can offer more than a typical holiday and create an unforgettable experience.
          </Styled.Text>
        </Styled.ContentContainer>
      </Styled.MainSection>
  );
};

export default HomePage;
