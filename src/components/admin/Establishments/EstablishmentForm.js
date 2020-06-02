import React from 'react';
import { Col, Button, Form } from 'react-bootstrap';

const ContactForm = ({ message, setMessage, handleSubmitMessage }) => {
    return (
        <Col md={7}>
            <article style={{backgroundColor: '#8DB5AA', color: 'white', padding: '20px'}}>
                <Col lg={10}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={3}>
                             First Name
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={message.firstName}
                                onChange={(e) => setMessage({...message, firstName: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Last Name
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                value={message.lastName}
                                onChange={(e) => setMessage({...message, lastName: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Email
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="email"
                                placeholder="user@example.com"
                                value={message.email}
                                onChange={(e) => setMessage({...message, email: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Address
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                value={message.address}
                                onChange={(e) => setMessage({...message, address: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Message
                            </Form.Label>
                            <Col>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder="Address"
                                value={message.message}
                                onChange={(e) => setMessage({...message, message: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Col>
            </article>
            <Button style={{border: 'none', borderRadius: 0}} onClick={handleSubmitMessage} size="lg" block>Send Message</Button>
        </Col>
    );
}
 
export default ContactForm;