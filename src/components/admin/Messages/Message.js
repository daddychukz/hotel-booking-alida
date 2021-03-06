import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

const MessageDetail = (props) => {
    return (
        <Form>
        {
            <>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control plaintext readOnly defaultValue={props.contact.name}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Email
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" plaintext readOnly defaultValue={props.contact.email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Message
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control
                            as="textarea"
                            rows="5"
                            readOnly
                            value={props.contact.message}
                        />
                    </Col>
                </Form.Group>
                <Button onClick={() => props.handleOpenModal(props.contact.name, props.contact.email, true)} variant="primary">Respond</Button>
            </>
        }
    </Form>
    );
}
 
export default MessageDetail;