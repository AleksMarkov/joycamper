import React from 'react';
import * as Styled from './FooterPage.styled.jsx';

const FooterPage = () => {
  return ( 
      <Styled.Footer>
        <h2>CONTACT US</h2>
        <p>Addres: Obolonsky Prospect, 14, Kyiv - <Styled.FooterLink href="tel:+380442422052">+380442422052</Styled.FooterLink></p>
        <p>Open hours: 9:00-18:00 - <Styled.FooterLink href="mailto:joycamper@gmail.com">service@joycamper.com</Styled.FooterLink></p>
      </Styled.Footer>
  );
};

export default FooterPage;