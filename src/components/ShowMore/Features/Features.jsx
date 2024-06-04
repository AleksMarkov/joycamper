import React from 'react';
import * as Styled from './Features.styled.jsx';
import Booking from '../Booking/Booking.jsx';
import Users from '../../../images/MYSVG/users.svg';
import Transmission from '../../../images/MYSVG/transmission.svg';
import Engine from '../../../images/MYSVG/engine.svg';
import Kitchen from '../../../images/MYSVG/kitchen.svg';
import Beds from '../../../images/MYSVG/beds.svg';
import AC from '../../../images/MYSVG/AC.svg';
import Conditioner from '../../../images/MYSVG/AirConditioner.svg';
import TV from '../../../images/MYSVG/TV.svg';
import WC from '../../../images/MYSVG/Toilet.svg';
import Shower from '../../../images/MYSVG/shower.svg';
import CD from '../../../images/MYSVG/CD.svg';
import Radio from '../../../images/MYSVG/Radio.svg';
import Hob from '../../../images/MYSVG/hob.svg';
import Freezer from '../../../images/MYSVG/Freezer.svg';
import Microwave from '../../../images/MYSVG/Microwave.svg';

const Features = ({ card }) => {

  // Helper function to format string
  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Helper function to add space between number and unit
  const addSpaceBetweenNumberAndUnit = (str) => {
    return str.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  };

  return (
    <Styled.InfoContainer>
      <Styled.FeaturesContainer>
        <Styled.ItemContainer>
          <Styled.Feature>
            <Styled.Item>
              <img src={Users} alt="Adalts" width="20" height="20" />
              {card.adults} adults
            </Styled.Item>
          </Styled.Feature>
          <Styled.Feature>
            <Styled.Item>
              <img src={Transmission} alt="Transmission" width="20" height="20" />
              {card.transmission}
            </Styled.Item>
          </Styled.Feature>
          {card.details.airConditioner === 1 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={AC} alt="AC" width="20" height="20" />
                AC
              </Styled.Item>
            </Styled.Feature>
          )}
          <Styled.Feature>
            <Styled.Item>
              <img src={Engine} alt="Engine" width="20" height="20" />
              {card.engine}
            </Styled.Item>
          </Styled.Feature>
          {card.details.kitchen === 1 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Kitchen} alt="Kitchen" width="20" height="20" />
                Kitchen
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.airConditioner > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Conditioner} alt="AC" width="20" height="20" />
                {card.details.airConditioner} air conditioner
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.beds > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Beds} alt="Beds" width="20" height="20" />
                {card.details.beds} Beds
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.TV > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={TV} alt="TV" width="20" height="20" />
                TV
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.bathroom > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={WC} alt="WC" width="20" height="20" />
                WC
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.shower > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Shower} alt="Shower" width="20" height="20" />
                Shower
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.CD > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={CD} alt="CD" width="20" height="20" />
                CD
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.radio > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Radio} alt="radio" width="20" height="20" />
                Radio
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.hob > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Hob} alt="hob" width="20" height="20" />
                {card.details.hob} Hob
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.freezer > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Freezer} alt="freezer" width="20" height="20" />
                Freezer
              </Styled.Item>
            </Styled.Feature>
          )}
          {card.details.microwave > 0 && (
            <Styled.Feature>
              <Styled.Item>
                <img src={Microwave} alt="microwave" width="20" height="20" />
                Microwave
              </Styled.Item>
            </Styled.Feature>
          )}
        </Styled.ItemContainer>
        <Styled.ParamContainer>
          <Styled.Title>Vehicle details</Styled.Title>
          <Styled.Param>
            <span>Form</span> <span>{capitalizeString(card.form)}</span>
          </Styled.Param>
          <Styled.Param>
            <span>Length</span> <span>{addSpaceBetweenNumberAndUnit(card.length)}</span>
          </Styled.Param>
          <Styled.Param>
            <span>Width</span> <span>{addSpaceBetweenNumberAndUnit(card.width)}</span>
          </Styled.Param>
          <Styled.Param>
            <span>Height</span> <span>{addSpaceBetweenNumberAndUnit(card.height)}</span>
          </Styled.Param>
          <Styled.Param>
            <span>Tank</span> <span>{addSpaceBetweenNumberAndUnit(card.tank)}</span>
          </Styled.Param>
          <Styled.Param>
            <span>Consumption</span> <span>{addSpaceBetweenNumberAndUnit(card.consumption)}</span>
          </Styled.Param>
        </Styled.ParamContainer>
      </Styled.FeaturesContainer>
      <Booking />
    </Styled.InfoContainer>
  );
};

export default Features;
