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
    margin: 40px 0;
`;

export const Button = styled.button`
    padding: 20px 40px;
    background-color: #0066ff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056e0;
    }
`;
