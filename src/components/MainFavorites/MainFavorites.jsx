import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterInterests } from '../../redux/cards/interestsSlice'; 
import * as Styled from './MainFavorites.styled';
import { ReactComponent as Ac } from '../../assets/MYSVG/AC.svg';
import { ReactComponent as Transmission } from '../../assets/MYSVG/transmission.svg';
import { ReactComponent as Kitchen } from '../../assets/MYSVG/kitchen.svg';
import { ReactComponent as TV } from '../../assets/MYSVG/TV.svg';
import { ReactComponent as Shower } from '../../assets/MYSVG/shower.svg';
import { ReactComponent as Van } from '../../assets/MYSVG/Van.svg';
import { ReactComponent as Fully } from '../../assets/MYSVG/Fully.svg';
import { ReactComponent as Alcove } from '../../assets/MYSVG/Alcove.svg';
import Map from '../../assets/MYSVG/Map.svg';

const MainFavorites = () => {
  const dispatch = useDispatch();
  const [acSelected, setAcSelected] = useState(false);
  const [automaticSelected, setAutomaticSelected] = useState(false);
  const [kitchenSelected, setKitchenSelected] = useState(false);
  const [tvSelected, setTvSelected] = useState(false);
  const [showerSelected, setShowerSelected] = useState(false);
  const [location, setLocation] = useState(''); 
  const [vanSelected, setVanSelected] = useState(false);
  const [fullSelected, setFullSelected] = useState(false);
  const [alcoveSelected, setAlcoveSelected] = useState(false);

  const handleVehicleSelect = (vehicleType) => {
    if (vehicleType === 'panelTruck') {
      setVanSelected(!vanSelected);
      setFullSelected(false);
      setAlcoveSelected(false);
    } else if (vehicleType === 'fullyIntegrated') {
      setFullSelected(!fullSelected);
      setVanSelected(false);
      setAlcoveSelected(false);
    } else if (vehicleType === 'alcove') {
      setAlcoveSelected(!alcoveSelected);
      setVanSelected(false);
      setFullSelected(false);
    }
  };

  const handleEquipmentSelect = (equipmentType, setEquipmentType) => {
    setEquipmentType((prevState) => !prevState);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value); 
  };

  const handleSearch = () => {
    dispatch(filterInterests({
      acSelected,
      automaticSelected,
      kitchenSelected,
      tvSelected,
      showerSelected,
      vanSelected,
      fullSelected,
      alcoveSelected,
      location,
    }));
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
              onClick={() => handleEquipmentSelect('AC', setAcSelected)}
            >
              <Styled.IconWrapper>
                <Ac width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>AC</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={automaticSelected}
              onClick={() => handleEquipmentSelect('Automatic', setAutomaticSelected)}
            >
              <Styled.IconWrapper>
                <Transmission width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Automatic</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={kitchenSelected}
              onClick={() => handleEquipmentSelect('Kitchen', setKitchenSelected)}
            >
              <Styled.IconWrapper>
                <Kitchen width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Kitchen</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={tvSelected}
              onClick={() => handleEquipmentSelect('TV', setTvSelected)}
            >
              <Styled.IconWrapper>
                <TV width="32" height="32" />
              </Styled.IconWrapper>
              <Styled.ButtonText>TV</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={showerSelected}
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
              isselected={vanSelected}
              onClick={() => handleVehicleSelect('panelTruck')}
            >
              <Styled.IconWrapper>
                <Van width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Van</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={fullSelected}
              onClick={() => handleVehicleSelect('fullyIntegrated')}
            >
              <Styled.IconWrapper>
                <Fully width="40" height="28" />
              </Styled.IconWrapper>
              <Styled.ButtonText>Fully Integrated</Styled.ButtonText>
            </Styled.FilterButton>
            <Styled.FilterButton
              isselected={alcoveSelected}
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
      <Styled.Button onClick={handleSearch}>Search</Styled.Button>
    </Styled.Container>
  );
};

export default MainFavorites;
