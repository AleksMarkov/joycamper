import styled from 'styled-components';

export const MainSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center
    flex-grow: 1;
    gap: 50px;
    padding: 100px;
    padding-top: 50px;
    background-color: #f9f9f9;
    align-items: center
    overflow: hidden;
    justify-content: center
`;

export const ImageContainer = styled.div`
    flex-basis: 400px;
    flex-shrink: 0;
    height: 400px;
    overflow: hidden;
    margin-right: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContentContainer = styled.div`
flex-basis: 400px;
flex-shrink: 0;
height: 400px;
overflow: hidden;
`;

export const Heading = styled.div`
    text-align: right;
    font-size: 60px;
    font-weight: 600;
    margin-top: 120px;
    color: var(--button);
    padding-right: 30px;
`;

export const Text = styled.p`

font-size: 28px;
font-weight: 500;
text-align: right;
padding-right: 30px;
color: #333;
`;
