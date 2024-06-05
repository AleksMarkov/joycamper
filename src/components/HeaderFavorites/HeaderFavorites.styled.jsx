import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--button);
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 146px;

  @media (max-width: 768px) {
    padding-left: 20px;
    justify-content: center;
  }
`;

export const ButtonLeft = styled.button`
  border-left: 4px solid white;
  border-right: 4px solid white;
  border-top: none;
  border-bottom: none;
  padding: 20px 50px;
  background-color: var(--button);
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    color: var(--button);
    background-color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
  }
`;

export const ButtonRight = styled(ButtonLeft)`
  border-left: none;
`;
