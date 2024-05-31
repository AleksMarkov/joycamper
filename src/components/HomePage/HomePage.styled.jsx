import styled from 'styled-components';

export const MainSection = styled.section`
    display: flex;
    flex-grow: 1;
    text-align: left;
    padding: 20px;
    background-color: #f9f9f9;
    align-items: flex-start;
    overflow: hidden;
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
    padding-left: 20px;
    flex-grow: 1;
    max-width: calc(100% - 640px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

export const Text = styled.p`
    text-align: justify;
    text-justify: inter-word;
    width: 100%; /* Ensure the text takes full width of the container */
    margin: 0;
`;
