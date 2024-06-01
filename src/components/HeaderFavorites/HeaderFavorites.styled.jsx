import styled from 'styled-components';

export const TopBar = styled.div`
font-family: Arial, sans-serif;
display: flex;
flex-direction: column;
height: 100vh;
overflow: hidden;
box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: start;
gap: 300px;
margin: 0;
background-color: #fffacd; /* Light yellow background */
padding: 10px; /* Add padding for better spacing */
`;

export const Button = styled.button`
padding: 10px 20px;
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
