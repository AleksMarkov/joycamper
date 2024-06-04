import styled from 'styled-components';

export const InfoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start
align-items: flex-start
width: 100%;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  gap: 50px;
  width: 444px;
  padding-right: 16px;
`;

export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
padding: 0px;
gap: 8px;
width: 444px;
`;

export const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
 padding: 0px 20px;
 gap: 4px;
`;

export const Feature = styled.div`
  border-radius: 100px;
  height: 44px;
  display: flex;
  // gap: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F2F4F7;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #101828;
`;
export const ParamContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
padding: 0px;
gap: 10px;
width: 100%;
`;

export const Title = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 12px;
  border-bottom: 1px solid #E0E0E0;
`;
export const Param = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
// text-align: center;
color: #101828;
  // overflow: hidden;
  // text-overflow: ellipsis;
`;