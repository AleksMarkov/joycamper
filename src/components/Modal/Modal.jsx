import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../../assets/MYSVG/close.svg';
import { Opacity, Modalcont, ModalClose } from './Modal.styled';

const Modal = ({ children, width, height, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <Opacity onClick={onClose}>
      <Modalcont
        $Width={width}
        $Height={height}
        onClick={event => event.stopPropagation()}
      >
        <ModalClose onClick={onClose}>
          <img src={Icon} width="32" height="32" alt="close" />
        </ModalClose>
        {children}
      </Modalcont>
    </Opacity>,
    modalRoot
  );
};

export default Modal;
