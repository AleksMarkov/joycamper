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

  @media (max-width: 1440px) {
    padding: 30px;
  }

  @media (max-width: 779px) {
    padding: 20px;
  }

  @media (max-width: 369px) {
    padding: 10px;
  }
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
