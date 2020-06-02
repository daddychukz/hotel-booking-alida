import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import EstablishmentForm from './EstablishmentForm';

const ContactPage = () => {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('Messages')) || [])
    const [message, setMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        message: ''
    });
    const [submit, setSubmit] = useState(false);

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, message]);
        setSubmit(true)
    }

    useEffect(() => {
        if (messages.length) {
            console.log(messages)
            localStorage.setItem('Messages', JSON.stringify(messages));
        }
    },[submit]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <section>
                <Row>
                    <Col md={{ offset: 2 }} style={{ paddingLeft: '4em'}}>
                    {
                        submit ? <h2>New Establishment Created!</h2>
                        : <h2>Create a new Establishment</h2>
                    }
                    </Col>
                </Row>
                {
                    submit ? null :
                    <Row className="justify-content-md-center">
                        <EstablishmentForm
                            message={message}
                            setMessage={setMessage}
                            handleSubmitMessage={handleSubmitMessage}
                        />
                    </Row>
                }
            </section>
        </Container>
    );
}
 
export default ContactPage;