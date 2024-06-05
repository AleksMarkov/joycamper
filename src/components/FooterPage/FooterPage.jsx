import React from 'react';
import {
  Footer,
  FooterLink
} from './FooterPage.styled.jsx';

const FooterPage = () => {
  return ( 
      <Footer>
        <h2>CONTACT US</h2>
        <p>Address: Obolonsky Prospect, 14, Kyiv - <FooterLink href="tel:+380442422052">+380442422052</FooterLink></p>
        <p>Open hours: 9:00-18:00 - <FooterLink href="mailto:joycamper@gmail.com">service@joycamper.com</FooterLink></p>
      </Footer>
  );
};

export default FooterPage;
