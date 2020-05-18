import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Image } from 'react-bootstrap';
import Search from './Search';

const Hompeage = () => {
    return (
        <Container>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label style={{paddingTop: '1.5em'}} column sm={3}>
                        <h2>Search hotels</h2>
                    </Form.Label>
                    <Col sm={6}>
                        <Search />
                        <Row style={{marginTop: '3em'}}>
                            <Col>
                                <section style={{border: '2px solid #8DB5AA'}}>
                                    <Image 
                                        src="/home.png"
                                        alt=""
                                        fluid
                                    />
                                    <Button style={{backgroundColor: "#8DB5AA", border: 'none', borderRadius: 0}} size="lg" block>See All Hotels</Button>
                                </section>
                            </Col>
                        </Row>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
}
 
export default Hompeage;