import styled from 'styled-components';

export const TopBar = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: #e44848;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 146px;
  
`;

export const Button = styled.button`      
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-top: none;
  border-bottom: none;
  padding: 20px 50px;
  background-color: #e44848;
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
  color: #e44848;
  background-color: white;
`;
