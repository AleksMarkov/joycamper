import styled from 'styled-components';

export const TopBar = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin-left: 36px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 48px;
  padding: 28px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #e44848;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d84343;
  }
`;
