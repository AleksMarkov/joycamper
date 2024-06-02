import React, { useState } from 'react';
import * as Styled from './MainCatalog.styled';
import { ReactComponent as Ac } from '../../images/MYSVG/AC.svg';
import { ReactComponent as Transmission } from '../../images/MYSVG/transmission.svg';
import { ReactComponent as Kitchen } from '../../images/MYSVG/kitchen.svg';
import { ReactComponent as TV } from '../../images/MYSVG/TV.svg';
import { ReactComponent as Shower } from '../../images/MYSVG/shower.svg';
import { ReactComponent as Van } from '../../images/MYSVG/Van.svg';
import { ReactComponent as Fully } from '../../images/MYSVG/Fully.svg';
import { ReactComponent as Alcove } from '../../images/MYSVG/Alcove.svg';
import Map from '../../images/MYSVG/Map.svg';

const MainCatalog = () => {
  const [acSelected, setAcSelected] = useState(false);
  const [automaticSelected, setAutomaticSelected] = useState(false);
  const [kitchenSelected, setKitchenSelected] = useState(false);
  const [tvSelected, setTvSelected] = useState(false);
  const [showerSelected, setShowerSelected] = useState(false);
  const [location, setLocation] = useState(''); 
  const [vanSelected, setVanSelected] = useState(false);
  const [fullSelected, setFullSelected] = useState(false);
  const [alcoveSelected, setAlcoveSelected] = useState(false);

  const handleVehicleSelect = (vehicleType, setVechicleType) => {
    setVechicleType((prevState) => !prevState);
  };

  const handleEquipmentSelect = (equipmentType, setEquipmentType) => {
    setEquipmentType((prevState) => !prevState);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value); 
  };

  return (
    <Styled.Container>
      <Styled.LocationSection>
        <Styled.SupportingText>Location</Styled.SupportingText>
        <Styled.InputForm>
          <Styled.Input
            type="text"
            placeholder="Kyiv, Ukraine"
            icon={Map}
            value={location} 
            onChange={handleLocationChange} 
          />
        </Styled.InputForm>
      </Styled.LocationSection>
      <Styled.FiltersTitle>Filters</Styled.FiltersTitle>
      <Styled.FiltersSection>
        <Styled.ContainerVehicle>
          <Styled.FilterTitle>Vehicle equipment</Styled.FilterTitle>
          <Styled.Divider />
          <Styled.Filters>
            <Styled.FilterButton
              isSelected={acSelected}
              onClick={() => handleEquipmentSelect('AC', setAcSelected)}
            >
              <Styled.IconWrapper>
                <Ac width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>AC</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={automaticSelected}
              onClick={() => handleEquipmentSelect('Automatic', setAutomaticSelected)}
            >
              <Styled.IconWrapper>
                <Transmission width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Automatic</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={kitchenSelected}
              onClick={() => handleEquipmentSelect('Kitchen', setKitchenSelected)}
            >
              <Styled.IconWrapper>
                <Kitchen width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Kitchen</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={tvSelected}
              onClick={() => handleEquipmentSelect('TV', setTvSelected)}
            >
              <Styled.IconWrapper>
                <TV width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>TV</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={showerSelected}
              onClick={() => handleEquipmentSelect('Shower', setShowerSelected)}
            >
              <Styled.IconWrapper>
                <Shower width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Shower/WC</Styled.ButtonText>
            </Styled.FilterButton>
          </Styled.Filters>
        </Styled.ContainerVehicle>
        <Styled.ContainerVehicle>
          <Styled.FilterTitle>Vehicle type</Styled.FilterTitle>
          <Styled.Divider />
          <Styled.Filters>
            <Styled.FilterButton
              isSelected={vanSelected}
              onClick={() => handleVehicleSelect('panelTruck', setVanSelected)}
            >
              <Styled.IconWrapper>
                <Van width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Van</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={fullSelected}
              onClick={() => handleVehicleSelect('fullyIntegrated',setFullSelected )}
            >
              <Styled.IconWrapper>
                <Fully width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Fully Integrated</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isSelected={alcoveSelected}
              onClick={() => handleVehicleSelect('alcove',setAlcoveSelected)}
            >
              <Styled.IconWrapper>
                <Alcove width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Alcove</Styled.ButtonText>
            </Styled.FilterButton>
          </Styled.Filters>
        </Styled.ContainerVehicle>
      </Styled.FiltersSection>
      <Styled.Button>Search</Styled.Button>
    </Styled.Container>
  );
};

export default MainCatalog;