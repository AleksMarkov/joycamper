import styled from 'styled-components';

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #f9f9f9;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--button);
`;

export const ButtonLeft = styled.button`
    padding: 20px 40px;
    background-color: var(--button);
    color: #f9f9f9;
    border: 4px solid;
    border-top: none;
    border-bottom: none;
    border-right: none;
    cursor: pointer;
    font-size: 40px;
    font-weight: 700;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #f9f9f9;

        color: var(--button);
  }
    }
`;
export const ButtonRight = styled.button`
    padding: 20px 40px;
    background-color: var(--button);
    color: white;
    border: solid;
    border: 4px solid;
    border-top: none;
    border-bottom: none;
    cursor: pointer;
    font-size: 40px;
    font-weight: 700;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f9f9f9;
    
            color: var(--button);
      }
    }
`;
