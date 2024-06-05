import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 400px; 
  padding-left: 64px;

  @media (max-width: 1440px) {
    width: 100%;
    padding-left: 0;
    align-items: center;
  }
`;

export const LoadMoreButton = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--main);
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 100px;
  position: relative; 
  margin-left: 370px; 

  &:hover {
    border: 1px solid var(--button);
  }

  @media (max-width: 779px) {
    margin-left: 0;
  }

  @media (max-width: 369px) {
    width: 120px;
    height: 48px;
    font-size: 14px;
  }
`;

export const NoResultsMessage = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: var(--button);
  margin-top: 20px;

  @media (max-width: 779px) {
    font-size: 24px;
  }

  @media (max-width: 369px) {
    font-size: 20px;
  }
`;
