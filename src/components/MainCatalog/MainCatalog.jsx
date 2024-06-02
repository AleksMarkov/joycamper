  import React from 'react';
  import * as Styled from './MainCatalog.styled';
  import AC from '../../images/MYSVG/AC.svg';
  import { ReactComponent as Transmission } from '../../images/MYSVG/transmission.svg';
  import { ReactComponent as Kitchen } from '../../images/MYSVG/kitchen.svg';
  import { ReactComponent as TV } from '../../images/MYSVG/TV.svg';
  import { ReactComponent as Shower } from '../../images/MYSVG/shower.svg';
  import { ReactComponent as Van } from '../../images/MYSVG/Van.svg';
  import { ReactComponent as Fully } from '../../images/MYSVG/Fully.svg';
  import { ReactComponent as Alcove } from '../../images/MYSVG/Alcove.svg';
  // import { ReactComponent as Map } from '../../images/MYSVG/Map.svg';
  
  const MainCatalog = () => {
    return (
      <Styled.Container>
        <Styled.LocationSection>
          <Styled.SupportingText>Location</Styled.SupportingText>
          <Styled.InputForm>
            <Styled.Input type="text" placeholder="Kyiv, Ukraine" />
          </Styled.InputForm>
        </Styled.LocationSection>
  
        <Styled.FiltersTitle>Filters</Styled.FiltersTitle>
       
        <Styled.FiltersSection>
          <Styled.ContainerVehicle>
            <Styled.FilterTitle>Vehicle equipment</Styled.FilterTitle>
            <Styled.Divider />
            <Styled.Filters>
              <Styled.FilterButton>
                <Styled.IconWrapper>
                <img src={AC} alt="Air Conditioner" width="32" height="32" />
                </Styled.IconWrapper>
                <Styled.ButtonText>AC</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
                <Styled.IconWrapper>
                 <Transmission width="32" height="32" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Automatic</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
                <Styled.IconWrapper>
                 <Kitchen width="32" height="32" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Kitchen</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
                <Styled.IconWrapper>
                 <TV width="32" height="32" />
                </Styled.IconWrapper>
                <Styled.ButtonText>TV</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
                <Styled.IconWrapper>
                 <Shower width="32" height="32" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Shower/WC</Styled.ButtonText>
                </Styled.FilterButton>
              </Styled.Filters>
             </Styled.ContainerVehicle>
          <Styled.ContainerVehicle>
            <Styled.FilterTitle>Vehicle type</Styled.FilterTitle>Shower/WC
            <Styled.Divider />
            <Styled.Filters>
              <Styled.FilterButton>
              <Styled.IconWrapper>
                 <Van width="40" height="28" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Van</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
              <Styled.IconWrapper>
                 <Fully width="40" height="28" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Fully Integrated</Styled.ButtonText>
              </Styled.FilterButton>
              <Styled.FilterButton>
              <Styled.IconWrapper>
                 <Alcove width="40" height="28" />
                </Styled.IconWrapper>
                <Styled.ButtonText>Alcove</Styled.ButtonText>
              </Styled.FilterButton>
            </Styled.Filters>
          </Styled.ContainerVehicle>Alcove
        </Styled.FiltersSection>
        
        <Styled.Button>Search</Styled.Button>
      </Styled.Container>
    );
  };
  
  export default MainCatalog;