import React from 'react';
import * as Styled from './Booking.styled.jsx';
import Calendar from '../../../images/MYSVG/calendar.svg';

const Booking = () => {
  return (
    <Styled.Container>
      <Styled.Titles>Book your campervan now</Styled.Titles>
      <Styled.SubTitle>Stay connected! We are always ready to help you.</Styled.SubTitle>
      <Styled.Form>
        <Styled.Input placeholder="Name" />
        <Styled.Input placeholder="Email" />
        <Styled.InputContainer>
          <Styled.Input
           placeholder="Booking date"
           icon={Calendar}/>
        </Styled.InputContainer>
        <Styled.TextArea placeholder="Comment" />
        <Styled.Button>Send</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Booking;
