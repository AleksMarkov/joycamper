import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: #f9f9f9;
    color: #333;
    text-align: center;
    padding: 40px;
    overflow: hidden;
    gap: 5px;
`;

export const FooterLink = styled.a`
    color: #333;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
