import React, { useState } from 'react';
import * as Styled from './MainCatalog.styled';
import { ReactComponent as Ac } from '../../assets/MYSVG/AC.svg';
import { ReactComponent as Transmission } from '../../assets/MYSVG/transmission.svg';
import { ReactComponent as Kitchen } from '../../assets/MYSVG/kitchen.svg';
import { ReactComponent as TV } from '../../assets/MYSVG/TV.svg';
import { ReactComponent as Shower } from '../../assets/MYSVG/shower.svg';
import { ReactComponent as Van } from '../../assets/MYSVG/Van.svg';
import { ReactComponent as Fully } from '../../assets/MYSVG/Fully.svg';
import { ReactComponent as Alcove } from '../../assets/MYSVG/Alcove.svg';
import Map from '../../assets/MYSVG/Map.svg';

const MainCatalog = ({ onSearch }) => {
  const [acSelected, setAcSelected] = useState(false);
  const [automaticSelected, setAutomaticSelected] = useState(false);
  const [kitchenSelected, setKitchenSelected] = useState(false);
  const [tvSelected, setTvSelected] = useState(false);
  const [showerSelected, setShowerSelected] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleVehicleSelect = (vehicleType) => {
    setSelectedVehicle((prevSelectedVehicle) =>
      prevSelectedVehicle === vehicleType ? '' : vehicleType
    );
  };

  const handleEquipmentSelect = (setEquipmentType) => {
    setEquipmentType((prevState) => !prevState);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch({
      acSelected,
      automaticSelected,
      kitchenSelected,
      tvSelected,
      showerSelected,
      location,
      selectedVehicle,
    });
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
              isselected={acSelected}
              onClick={() => handleEquipmentSelect(setAcSelected)}
            >
              <Styled.IconWrapper>
                <Ac width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>AC</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={automaticSelected}
              onClick={() => handleEquipmentSelect(setAutomaticSelected)}
            >
              <Styled.IconWrapper>
                <Transmission width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Automatic</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={kitchenSelected}
              onClick={() => handleEquipmentSelect(setKitchenSelected)}
            >
              <Styled.IconWrapper>
                <Kitchen width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Kitchen</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={tvSelected}
              onClick={() => handleEquipmentSelect(setTvSelected)}
            >
              <Styled.IconWrapper>
                <TV width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>TV</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={showerSelected}
              onClick={() => handleEquipmentSelect(setShowerSelected)}
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
              isselected={selectedVehicle === 'panelTruck'}
              onClick={() => handleVehicleSelect('panelTruck')}
            >
              <Styled.IconWrapper>
                <Van width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Van</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={selectedVehicle === 'fullyIntegrated'}
              onClick={() => handleVehicleSelect('fullyIntegrated')}
            >
              <Styled.IconWrapper>
                <Fully width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Fully Integrated</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={selectedVehicle === 'alcove'}
              onClick={() => handleVehicleSelect('alcove')}
            >
              <Styled.IconWrapper>
                <Alcove width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Alcove</Styled.ButtonText>
            </Styled.FilterButton>
          </Styled.Filters>
        </Styled.ContainerVehicle>
      </Styled.FiltersSection>
      <Styled.Button onClick={handleSearchClick}>Search</Styled.Button>
    </Styled.Container>
  );
};

export default MainCatalog;
