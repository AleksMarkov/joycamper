import React, { useState } from 'react';
import * as Styled from './Booking.styled.jsx';
import { validateName, validateEmail, validateDate } from '../../../helpers/validation.js';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!validateName(name)) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validateDate(date)) {
      newErrors.date = 'Booking date must be tomorrow or later.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log({ name, email, date, comment });
    }
  };

  return (
    <Styled.Container>
      <Styled.Titles>Book your campervan now</Styled.Titles>
      <Styled.SubTitle>Stay connected! We are always ready to help you.</Styled.SubTitle>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <Styled.Error>{errors.name}</Styled.Error>}

        <Styled.Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'invalid' : ''}
        />
        {errors.email && <Styled.Error>{errors.email}</Styled.Error>}

        <Styled.InputContainer>
          <Styled.Input
            type="date"
            placeholder="Booking date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={errors.date ? 'invalid' : ''}
          />
        </Styled.InputContainer>
        {errors.date && <Styled.Error>{errors.date}</Styled.Error>}

        <Styled.TextArea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Styled.Button type="submit">Send</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Booking;
