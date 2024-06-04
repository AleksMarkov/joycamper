import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 400px;
  gap: 14px;
  height: 532px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Titles = styled.div`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.2;
color: #101828;
// margin-bottom: 8px;
`;

export const SubTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 16px;
`;

export const Input = styled.input`
border-radius: 10px;
padding: 0px 18px;
width: 368px;
height: 56px;
  background-color: #f7f7f7;
  border: 1px solid #e5e7eb;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #101828;
  background: url(${({ icon }) => icon}) no-repeat 362px center / 20px 20px, #f7f7f7;
  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
`;

export const TextArea = styled.textarea`
  padding: 18px 18px;
  width: 368px;
  height: 82px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #101828;
  resize: none;
  &::placeholder {
    color: #667085;
  }
`;

export const Button = styled.button`
border-radius: 200px;
margin-top: 24px;
padding: 16px 60px;
width: 160px;
height: 56px;
//   padding: 16px 24px;
background-color: #e44848;
font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.01em;
color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d43737;
  }
`;
