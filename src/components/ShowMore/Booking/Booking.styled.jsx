import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 400px;
  gap: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1440px) {
    width: 350px;
  }

  @media (max-width: 779px) {
    width: 300px;
    padding: 16px;
  }

  @media (max-width: 369px) {
    width: 260px;
    padding: 12px;
  }
`;

export const Titles = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);

  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 779px) {
    font-size: 16px;
  }

  @media (max-width: 369px) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 10px;

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 779px) {
    font-size: 12px;
  }

  @media (max-width: 369px) {
    font-size: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 0px 18px;
  width: 352px;
  height: 56px;
  background-color: var(--block-features);
  border: 1px solid #e5e7eb;
  font-weight: 400;
  font-size: 16px;
  color: var(--main);
  background: url(${({ icon }) => icon}) no-repeat 362px center / 20px 20px, var(--block-features);

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }

  &.invalid {
    border-color: red;
  }

  @media (max-width: 1440px) {
    width: 320px;
    height: 48px;
    padding: 0px 16px;
    font-size: 14px;
  }

  @media (max-width: 779px) {
    width: 280px;
    height: 40px;
    padding: 0px 12px;
    font-size: 12px;
  }

  @media (max-width: 369px) {
    width: 240px;
    height: 32px;
    padding: 0px 10px;
    font-size: 10px;
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
  width: 352px;
  height: 82px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  color: var(--main);
  resize: none;

  &::placeholder {
    color: #667085;
  }

  @media (max-width: 1440px) {
    width: 320px;
    height: 72px;
    font-size: 14px;
  }

  @media (max-width: 779px) {
    width: 280px;
    height: 64px;
    font-size: 12px;
  }

  @media (max-width: 369px) {
    width: 240px;
    height: 56px;
    font-size: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 200px;
  margin-top: 24px;
  padding: 16px 60px;
  width: 160px;
  height: 56px;
  background-color: var(--button);
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

  @media (max-width: 1440px) {
    padding: 14px 50px;
    width: 140px;
    height: 48px;
    font-size: 14px;
  }

  @media (max-width: 779px) {
    padding: 12px 40px;
    width: 120px;
    height: 40px;
    font-size: 12px;
  }

  @media (max-width: 369px) {
    padding: 10px 30px;
    width: 100px;
    height: 32px;
    font-size: 10px;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: var(--button);
  margin-top: -12px;
  margin-bottom: 8px;

  @media (max-width: 1440px) {
    font-size: 10px;
  }

  @media (max-width: 779px) {
    font-size: 8px;
  }

  @media (max-width: 369px) {
    font-size: 6px;
  }
`;
