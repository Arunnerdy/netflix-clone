import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const DialogBox = ({ message, onClose }) => {
    const { darkMode } = useTheme();
  // Automatically close the dialog box after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Modal
      show={true} // Always show the dialog box when it's rendered
      centered
      onHide={onClose}
      contentClassName={`rounded-20 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
      dialogClassName='rounded-20'
    >
      <Modal.Body className="d-flex align-items-center justify-content-center p-4" style={{minHeight:'100px', borderStyle:'solid',borderRadius:'20px'}}>
        <p className="mb-0 text-center">{message}</p>
      </Modal.Body>
    </Modal>
  );
};

export default DialogBox;