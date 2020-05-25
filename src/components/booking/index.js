import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BookForm from './BookForm';

const Booking = () => {
    const [enquiries, setEnquiries] = useState(JSON.parse(localStorage.getItem('Enquiries')) || [])
    const [enquiry, setEnquiry] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        checkIn: '',
        checkOut: ''
    });
    const [submit, setSubmit] = useState(false);

    const handleSubmitEnquiry = (e) => {
        e.preventDefault();
        setEnquiries([...enquiries, enquiry]);
        setSubmit(true)
    }

    useEffect(() => {
        if (enquiries.length) {
            console.log(enquiries)
            localStorage.setItem('Enquiries', JSON.stringify(enquiries));
        }
    },[submit]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <section style={{height: '100vh'}}>
                <Row>
                    <Col>
                    {
                        submit ? <h2>Your enquiry has been sent!</h2>
                        : <h2>Book Sunssset Beach</h2>
                    }
                    </Col>
                </Row>
                {
                    submit ? null :
                    <Row>
                        <BookForm
                            enquiry={enquiry}
                            setEnquiry={setEnquiry}
                            handleSubmitEnquiry={handleSubmitEnquiry}
                        />
                    </Row>
                }
            </section>
        </Container>
    );
}
 
export default Booking;