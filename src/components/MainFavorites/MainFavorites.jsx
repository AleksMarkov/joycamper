import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterInterests } from '../../redux/cards/interestsSlice'; 
import {
  Container,
  LocationSection,
  SupportingText,
  InputForm,
  Input,
  FiltersTitle,
  FiltersSection,
  ContainerVehicle,
  FilterTitle,
  Divider,
  Filters,
  FilterButton,
  IconWrapper,
  ButtonText,
  Button
} from './MainFavorites.styled';
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

  const handleEquipmentSelect = (setEquipmentType) => {
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
    <Container>
      <LocationSection>
        <SupportingText>Location</SupportingText>
        <InputForm>
          <Input
            type="text"
            placeholder="Kyiv, Ukraine"
            icon={Map}
            value={location} 
            onChange={handleLocationChange} 
          />
        </InputForm>
      </LocationSection>
      <FiltersTitle>Filters</FiltersTitle>
      <FiltersSection>
        <ContainerVehicle>
          <FilterTitle>Vehicle equipment</FilterTitle>
          <Divider />
          <Filters>
            <FilterButton
              isselected={acSelected}
              onClick={() => handleEquipmentSelect(setAcSelected)}
            >
              <IconWrapper>
                <Ac width="32" height="32" />
              </IconWrapper>
              <ButtonText>AC</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={automaticSelected}
              onClick={() => handleEquipmentSelect(setAutomaticSelected)}
            >
              <IconWrapper>
                <Transmission width="32" height="32" />
              </IconWrapper>
              <ButtonText>Automatic</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={kitchenSelected}
              onClick={() => handleEquipmentSelect(setKitchenSelected)}
            >
              <IconWrapper>
                <Kitchen width="32" height="32" />
              </IconWrapper>
              <ButtonText>Kitchen</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={tvSelected}
              onClick={() => handleEquipmentSelect(setTvSelected)}
            >
              <IconWrapper>
                <TV width="32" height="32" />
              </IconWrapper>
              <ButtonText>TV</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={showerSelected}
              onClick={() => handleEquipmentSelect(setShowerSelected)}
            >
              <IconWrapper>
                <Shower width="32" height="32" />
              </IconWrapper>
              <ButtonText>Shower/WC</ButtonText>
            </FilterButton>
          </Filters>
        </ContainerVehicle>
        <ContainerVehicle>
          <FilterTitle>Vehicle type</FilterTitle>
          <Divider />
          <Filters>
            <FilterButton
              isselected={vanSelected}
              onClick={() => handleVehicleSelect('panelTruck')}
            >
              <IconWrapper>
                <Van width="40" height="28" />
              </IconWrapper>
              <ButtonText>Van</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={fullSelected}
              onClick={() => handleVehicleSelect('fullyIntegrated')}
            >
              <IconWrapper>
                <Fully width="40" height="28" />
              </IconWrapper>
              <ButtonText>Fully Integrated</ButtonText>
            </FilterButton>
            <FilterButton
              isselected={alcoveSelected}
              onClick={() => handleVehicleSelect('alcove')}
            >
              <IconWrapper>
                <Alcove width="40" height="28" />
              </IconWrapper>
              <ButtonText>Alcove</ButtonText>
            </FilterButton>
          </Filters>
        </ContainerVehicle>
      </FiltersSection>
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

export default MainFavorites;
