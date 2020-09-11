import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Forma  from './Forma';
import Button from 'react-bootstrap/Button';



function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Standard Group Package:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Forma />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyModal;