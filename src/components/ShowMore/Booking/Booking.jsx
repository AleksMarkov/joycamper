import React, { useState, forwardRef } from 'react';
import {
  Container,
  Titles,
  SubTitle,
  Form,
  Input,
  InputContainer,
  Icon,
  TextArea,
  Button,
  Error,
} from './Booking.styled.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HobIcon from '../../../assets/MYSVG/calendar.svg';
import {
  validateName,
  validateEmail,
  validateDate,
} from '../../../helpers/validation.js';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = date => {
    setDate(date);
  };

  const handleSubmit = event => {
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

  const CustomInput = forwardRef(
    ({ value, onClick, onChange, placeholder }, ref) => (
      <div onClick={onClick} style={{ position: 'relative' }}>
        <Input
          value={value}
          onChange={onChange}
          placeholder="Booking date"
          ref={ref}
          className={errors.date ? 'invalid' : ''}
        />
        <Icon
          src={HobIcon}
          alt="Calendar icon"
          onClick={onClick}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        />
      </div>
    )
  );

  return (
    <Container>
      <Titles>Book your campervan now</Titles>
      <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <Error>{errors.name}</Error>}

        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={errors.email ? 'invalid' : ''}
        />
        {errors.email && <Error>{errors.email}</Error>}

        <InputContainer>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
          />
        </InputContainer>
        {errors.date && <Error>{errors.date}</Error>}

        <TextArea
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Booking;
