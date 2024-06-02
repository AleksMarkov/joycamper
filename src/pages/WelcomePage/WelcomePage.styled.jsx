import styled from 'styled-components';

export const Home = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 300px;
    background-color: #f9f9f9;
    padding: 40px;
`;

export const Button = styled.button`
    padding: 20px 40px;
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
    }
`;
