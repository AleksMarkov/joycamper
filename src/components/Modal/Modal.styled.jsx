import styled from 'styled-components';

export const Opacity = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 18, 19, 0.4);
  z-index: 9999; 
`;

export const Modalcont = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  min-height: 130px;
  border-radius: 20px;
  color: var(--main);
  background-color: white;
  z-index: 10000; 
  width: ${({ $Width }) => $Width}px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  color: black;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  }
`;
