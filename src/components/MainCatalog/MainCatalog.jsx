import React from 'react';
import * as Styled from './MainCatalog.styled';

const MainCatalog = () => {
    return (
        <Styled.Container>
            <Styled.SupportingText>Location</Styled.SupportingText>
            <Styled.InputForm>
                <Styled.Input type="text" placeholder="Kyiv, Ukraine" />
            </Styled.InputForm>
            
            <Styled.FiltersTitle>Filters</Styled.FiltersTitle>
            
            <Styled.FiltersSection>
                <Styled.FilterTitle>Vehicle equipment</Styled.FilterTitle>
                <Styled.Filters>
                    <Styled.FilterButton>AC</Styled.FilterButton>
                    <Styled.FilterButton>Automatic</Styled.FilterButton>
                    <Styled.FilterButton>Kitchen</Styled.FilterButton>
                    <Styled.FilterButton>TV</Styled.FilterButton>
                    <Styled.FilterButton>Shower/WC</Styled.FilterButton>
                </Styled.Filters>
                
                <Styled.FilterTitle>Vehicle type</Styled.FilterTitle>
                <Styled.Filters>
                    <Styled.FilterButton>Van</Styled.FilterButton>
                    <Styled.FilterButton>Fully Integrated</Styled.FilterButton>
                    <Styled.FilterButton>Alcove</Styled.FilterButton>
                </Styled.Filters>
            </Styled.FiltersSection>
            
            <Styled.Button>Search</Styled.Button>
        </Styled.Container>
    );
};

export default MainCatalog;


