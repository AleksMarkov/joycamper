import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 64px;
  position: relative;
  width: 360px;
  box-sizing: border-box;
`;

export const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 88px;
  gap: 8px;
`;

export const SupportingText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const InputForm = styled.div`
  border-radius: 10px;
  padding: 0;
  width: 360px;
  height: 56px;
  display: flex;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 0px 18px;
  width: 100%;
  height: 56px;
  font-size: 16px;
  background-color: #f7f7f7;
  color: rgba(16, 24, 40, 0.6);
  background: url(${({ icon }) => icon}) no-repeat 16px center / 24px 24px, #f7f7f7;
  padding-left: 50px; /* Adjust padding to account for the icon */
  &:hover {
    color: #101828;
    outline: none;
  }
`;


export const FiltersTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
  margin-top: 32px;
  margin-bottom: 14px;
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  margin-bottom: 24px;
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
  border: 1px solid ${({ isSelected }) => (isSelected ? '#e44848' : 'rgba(16, 24, 40, 0.2)')};
  border-radius: 10px;
  padding: 17px 27px;
  width: 114px;
  height: 95px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#fdecec' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const IconWrapper = styled.div`
  svg {
    fill: black;
  }
`;

export const ButtonText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #101828;
  margin-top: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start; /* Aligns the button to the start */
  align-items: center;
  padding: 16px 60px;
  gap: 10px;
  width: 173px;
  height: 56px;
  background: #e44848;
  border-radius: 200px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 64px;
  &:hover {
    background-color: #d84343;
  }
`;

