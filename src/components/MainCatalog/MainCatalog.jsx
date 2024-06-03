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

const MainCatalog = ({ onSearch }) => {
  const [acSelected, setAcSelected] = useState(false);
  const [automaticSelected, setAutomaticSelected] = useState(false);
  const [kitchenSelected, setKitchenSelected] = useState(false);
  const [tvSelected, setTvSelected] = useState(false);
  const [showerSelected, setShowerSelected] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedForms, setSelectedForms] = useState([]);

  const handleVehicleSelect = (vehicleType) => {
    setSelectedForms((prevSelectedForms) =>
      prevSelectedForms.includes(vehicleType)
        ? prevSelectedForms.filter((type) => type !== vehicleType)
        : [...prevSelectedForms, vehicleType]
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
      selectedForms,
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
              isselected={selectedForms.includes('panelTruck')}
              onClick={() => handleVehicleSelect('panelTruck')}
            >
              <Styled.IconWrapper>
                <Van width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Van</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={selectedForms.includes('fullyIntegrated')}
              onClick={() => handleVehicleSelect('fullyIntegrated')}
            >
              <Styled.IconWrapper>
                <Fully width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Fully Integrated</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={selectedForms.includes('alcove')}
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
