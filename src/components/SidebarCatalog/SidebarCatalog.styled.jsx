import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 400px; 
  padding-left: 64px;
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
  left: 370px; 

  &:hover {
    border: 1px solid #e44848;
  }
`;