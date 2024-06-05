import React, { useState, forwardRef } from 'react';
import * as Styled from './Booking.styled.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HobIcon from '../../../assets/MYSVG/calendar.svg';
import { validateName, validateEmail, validateDate } from '../../../helpers/validation.js';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (date) => {
    setDate(date);
  };

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
      setName('');
      setEmail('');
      setDate(null);
      setComment('');
      window.location.reload();
    }
  };

  const CustomInput = forwardRef(({ value, onClick, onChange, placeholder }, ref) => (
    <div onClick={onClick} style={{ position: 'relative' }}>
      <Styled.Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        className={errors.date ? 'invalid' : ''}
        readOnly
      />
      <Styled.Icon
        src={HobIcon}
        alt="Calendar icon"
        onClick={onClick}
        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  ));

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
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            customInput={
              <CustomInput
                placeholder="Booking date"
                value={date ? date.toISOString().split('T')[0] : ''}
              />
            }
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
