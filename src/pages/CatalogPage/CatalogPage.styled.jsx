import styled from 'styled-components';

export const ContainerCatalog = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  max-width: 424px;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SidebarContent = styled.div`
margin-top: 20px;
width: 1000px; 
overflow-y: auto;


@media (max-width: 1440px) {
  width: 768px;
}

@media (max-width: 768px) {
  width: 100%;
  max-height: none;

`;
