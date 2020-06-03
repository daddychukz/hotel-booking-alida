import React from 'react';
import { Col, Button, Form } from 'react-bootstrap';

const EstablishmentForm = ({ establishment, setEstablishment, handleSubmitEstablishment }) => {
    return (
        <Col md={7}>
            <article style={{backgroundColor: '#8DB5AA', color: 'white', padding: '20px'}}>
                <Col lg={10}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Establishment
                            </Form.Label>
                            <Col>
                            <Form.Control
                                value={establishment.name}
                                onChange={(e) => setEstablishment({...establishment, name: e.target.value})}
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
                                value={establishment.email}
                                onChange={(e) => setEstablishment({...establishment, email: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Image
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="text"
                                placeholder="http://"
                                value={establishment.image}
                                onChange={(e) => setEstablishment({...establishment, image: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Price
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="number"
                                placeholder="$"
                                value={establishment.price}
                                onChange={(e) => setEstablishment({...establishment, price: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Max Guests
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={establishment.maxGuest}
                                    onChange={(e) => setEstablishment({...establishment, maxGuest: e.target.value})}
                                />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Latitude
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={establishment.latitude}
                                    onChange={(e) => setEstablishment({...establishment, latitude: e.target.value})}
                                />
                            </Col>
                            <Form.Label column lg={2}>
                             Longitude
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={establishment.longitude}
                                    onChange={(e) => setEstablishment({...establishment, longitude: e.target.value})}
                                />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Description
                            </Form.Label>
                            <Col>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder=""
                                value={establishment.description}
                                onChange={(e) => setEstablishment({...establishment, description: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}/>
                            <Form.Check
                                type="checkbox"
                                label="Self-Catering"
                                checked={establishment.selfCatering}
                                onChange={(e) => setEstablishment({...establishment, selfCatering: !establishment.selfCatering})}
                            />
                        </Form.Row>
                    </Form.Group>
                </Col>
            </article>
            <Button style={{border: 'none', borderRadius: 0}} onClick={handleSubmitEstablishment} size="lg" block>Submit</Button>
        </Col>
    );
}
 
export default EstablishmentForm;