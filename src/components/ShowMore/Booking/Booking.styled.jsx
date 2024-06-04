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
`;

export const Titles = styled.div`

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 10px;
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
`;

export const Error = styled.div`
  font-size: 12px;
  color: var(--button);
  margin-top: -12px;
  margin-bottom: 8px;
`;
