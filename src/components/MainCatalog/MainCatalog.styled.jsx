import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 64px;
  position: relative;
  width: 360px;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    margin-left: 5px;
    width: 100%;
  }
`;

export const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 88px;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SupportingText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InputForm = styled.div`
  border-radius: 10px;
  padding: 0;
  width: 360px;
  height: 56px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 0px 18px;
  width: 100%;
  height: 56px;
  font-size: 16px;
  background-color: var(--block-features);
  color: var(--main);
  background: url(${({ icon }) => icon}) no-repeat 16px center / 24px 24px,
    var(--block-features);
  padding-left: 50px;
  &:hover,
  &:focus {
    color: var(--main);
    outline: none;
  }

  @media (max-width: 779px) {
    font-size: 14px;
    height: 48px;
    padding-left: 40px;
  }
`;

export const FiltersTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
  margin-top: 32px;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 10px;
  }
`;

export const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
`;

export const ContainerVehicle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

export const FilterButton = styled.button`
  border: 1px solid
    ${({ isselected }) =>
      isselected ? 'var(--button)' : 'rgba(16, 24, 40, 0.2)'};
  border-radius: 10px;
  padding: 17px 27px;
  width: 114px;
  height: 95px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fdecec;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 80px;
    font-size: 14px;
  }

  @media (max-width: 369px) {
    width: 80px;
    height: 60px;
    font-size: 12px;
  }
`;

export const IconWrapper = styled.div`
  svg {
    fill: black;
  }
`;

export const ButtonText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--main);
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 369px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 60px;
  gap: 10px;
  width: 173px;
  height: 56px;
  background-color: var(--button);
  border-radius: 200px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 64px;
  &:hover {
    background-color: #d84343;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 48px;
    font-size: 14px;
    padding: 14px 50px;
  }

  @media (max-width: 369px) {
    width: 130px;
    height: 40px;
    font-size: 12px;
    padding: 12px 40px;
  }
`;
