import React from'react';
import { Modal, Button } from 'react-bootstrap';

const ContactModal = ({ showModal, handleClose }) => {
    
    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your letter we will reach out in 3 - 5 business days. Thank you!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default ContactModal;