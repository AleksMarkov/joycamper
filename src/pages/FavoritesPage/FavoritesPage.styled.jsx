import styled from 'styled-components';

export const ContainerFavorites = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  // padding: 0 64px;
  flex-grow: 1;
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  max-width: 424px;
  overflow-y: auto;
  // margin-right: 64px;
`;

export const SidebarContent = styled.div`
  width: 1000px; // Adjust the width as needed
  overflow-y: auto;
`;
