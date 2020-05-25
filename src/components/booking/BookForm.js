import React from 'react';
import { Col, Button, Form } from 'react-bootstrap';

const BookForm = ({ enquiry, setEnquiry, handleSubmitEnquiry }) => {
    return (
        <Col xs={7}>
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
                                value={enquiry.firstName}
                                onChange={(e) => setEnquiry({...enquiry, firstName: e.target.value})}
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
                                value={enquiry.lastName}
                                onChange={(e) => setEnquiry({...enquiry, lastName: e.target.value})}
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
                                value={enquiry.email}
                                onChange={(e) => setEnquiry({...enquiry, email: e.target.value})}
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
                                value={enquiry.address}
                                onChange={(e) => setEnquiry({...enquiry, address: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Check-in
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="date"
                                value={enquiry.checkIn}
                                onChange={(e) => setEnquiry({...enquiry, checkIn: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Check-out
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="date"
                                value={enquiry.checkOut}
                                onChange={(e) => setEnquiry({...enquiry, checkOut: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Col>
            </article>
            <Button style={{border: 'none', borderRadius: 0}} onClick={handleSubmitEnquiry} size="lg" block>Book Now</Button>
        </Col>
    );
}
 
export default BookForm;