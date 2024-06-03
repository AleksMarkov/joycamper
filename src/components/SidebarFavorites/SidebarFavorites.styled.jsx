import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  width: 400px; 
  padding-left: 64px;
`;

export const EmptyMessage = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: #101828;
  text-align: center; 
  margin-top: 20px;
`;

export const Highlight = styled.span`
  font-weight: 700; 
  text-decoration: underline; 
  color: #ff4500;
`;

export const LoadMoreButton = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  width: 145px;
  height: 56px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #101828;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 100px;
  position: relative; 
  margin-left: 370px;

  &:hover {
    border: 1px solid #e44848;
  }
`;