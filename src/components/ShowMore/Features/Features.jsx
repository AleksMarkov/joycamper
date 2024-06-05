import React from 'react';
import { 
  InfoContainer, 
  FeaturesContainer, 
  ItemContainer, 
  Feature, 
  Item, 
  ParamContainer, 
  Title, 
  Param 
} from './Features.styled.jsx';
import Booking from '../Booking/Booking.jsx';
import Users from '../../../assets/MYSVG/users.svg';
import Transmission from '../../../assets/MYSVG/transmission.svg';
import Engine from '../../../assets/MYSVG/engine.svg';
import Kitchen from '../../../assets/MYSVG/kitchen.svg';
import Beds from '../../../assets/MYSVG/beds.svg';
import AC from '../../../assets/MYSVG/AC.svg';
import Conditioner from '../../../assets/MYSVG/AirConditioner.svg';
import TV from '../../../assets/MYSVG/TV.svg';
import WC from '../../../assets/MYSVG/Toilet.svg';
import Shower from '../../../assets/MYSVG/shower.svg';
import CD from '../../../assets/MYSVG/CD.svg';
import Radio from '../../../assets/MYSVG/Radio.svg';
import Hob from '../../../assets/MYSVG/hob.svg';
import Freezer from '../../../assets/MYSVG/Freezer.svg';
import Microwave from '../../../assets/MYSVG/Microwave.svg';

const Features = ({ card }) => {

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const addSpaceBetweenNumberAndUnit = (str) => {
    return str.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  };

  return (
    <InfoContainer>
      <FeaturesContainer>
        <ItemContainer>
          <Feature>
            <Item>
              <img src={Users} alt="Adults" width="20" height="20" />
              {card.adults} adults
            </Item>
          </Feature>
          <Feature>
            <Item>
              <img src={Transmission} alt="Transmission" width="20" height="20" />
              {card.transmission}
            </Item>
          </Feature>
          {card.details.airConditioner === 1 && (
            <Feature>
              <Item>
                <img src={AC} alt="AC" width="20" height="20" />
                AC
              </Item>
            </Feature>
          )}
          <Feature>
            <Item>
              <img src={Engine} alt="Engine" width="20" height="20" />
              {card.engine}
            </Item>
          </Feature>
          {card.details.kitchen === 1 && (
            <Feature>
              <Item>
                <img src={Kitchen} alt="Kitchen" width="20" height="20" />
                Kitchen
              </Item>
            </Feature>
          )}
          {card.details.airConditioner > 0 && (
            <Feature>
              <Item>
                <img src={Conditioner} alt="AC" width="20" height="20" />
                {card.details.airConditioner} air conditioner
              </Item>
            </Feature>
          )}
          {card.details.beds > 0 && (
            <Feature>
              <Item>
                <img src={Beds} alt="Beds" width="20" height="20" />
                {card.details.beds} Beds
              </Item>
            </Feature>
          )}
          {card.details.TV > 0 && (
            <Feature>
              <Item>
                <img src={TV} alt="TV" width="20" height="20" />
                TV
              </Item>
            </Feature>
          )}
          {card.details.bathroom > 0 && (
            <Feature>
              <Item>
                <img src={WC} alt="WC" width="20" height="20" />
                WC
              </Item>
            </Feature>
          )}
          {card.details.shower > 0 && (
            <Feature>
              <Item>
                <img src={Shower} alt="Shower" width="20" height="20" />
                Shower
              </Item>
            </Feature>
          )}
          {card.details.CD > 0 && (
            <Feature>
              <Item>
                <img src={CD} alt="CD" width="20" height="20" />
                CD
              </Item>
            </Feature>
          )}
          {card.details.radio > 0 && (
            <Feature>
              <Item>
                <img src={Radio} alt="radio" width="20" height="20" />
                Radio
              </Item>
            </Feature>
          )}
          {card.details.hob > 0 && (
            <Feature>
              <Item>
                <img src={Hob} alt="hob" width="20" height="20" />
                {card.details.hob} Hob
              </Item>
            </Feature>
          )}
          {card.details.freezer > 0 && (
            <Feature>
              <Item>
                <img src={Freezer} alt="freezer" width="20" height="20" />
                Freezer
              </Item>
            </Feature>
          )}
          {card.details.microwave > 0 && (
            <Feature>
              <Item>
                <img src={Microwave} alt="microwave" width="20" height="20" />
                Microwave
              </Item>
            </Feature>
          )}
        </ItemContainer>
        <ParamContainer>
          <Title>Vehicle details</Title>
          <Param>
            <span>Form</span> <span>{capitalizeString(card.form)}</span>
          </Param>
          <Param>
            <span>Length</span> <span>{addSpaceBetweenNumberAndUnit(card.length)}</span>
          </Param>
          <Param>
            <span>Width</span> <span>{addSpaceBetweenNumberAndUnit(card.width)}</span>
          </Param>
          <Param>
            <span>Height</span> <span>{addSpaceBetweenNumberAndUnit(card.height)}</span>
          </Param>
          <Param>
            <span>Tank</span> <span>{addSpaceBetweenNumberAndUnit(card.tank)}</span>
          </Param>
          <Param>
            <span>Consumption</span> <span>{addSpaceBetweenNumberAndUnit(card.consumption)}</span>
          </Param>
        </ParamContainer>
      </FeaturesContainer>
      <Booking />
    </InfoContainer>
  );
};

export default Features;
