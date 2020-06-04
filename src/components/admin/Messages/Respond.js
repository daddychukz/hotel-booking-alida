import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const RespondModal = ({ open, handleClick, message, setMessage, handleClose }) => {
    const [show, setShow] = useState(open);
  
    // const handleClose = () => setShow(false);
    
    return (
      <>
        <Modal show={show} onHide={handleClose} size="md" backdrop="static">
          <Modal.Body>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Respond to ...</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="5"
                        placeholder="Write message here..."
                        value={message.message}
                        onChange={(e) => setMessage({ ...message, message: e.target.value })}
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(null, false)}>Close</Button>
                <Button variant="primary" onClick={handleClick}>Send Message</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default RespondModal;