import React, { useEffect } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

const EnquiryDetail = (props) => {
    useEffect(() => {
        if (props.acceptIds.length) {
            localStorage.setItem('AcceptIds', JSON.stringify(props.acceptIds));
        }
    },[props.acceptIds]) // eslint-disable-line react-hooks/exhaustive-deps

    if(props.acceptIds.filter((data) => data.id === props.enquiry.id)[0] && props.acceptIds.filter((data) => data.id === props.enquiry.id)[0].status === "accept"){
        return (
            <p>Accepted</p>
        );
    } else if (props.acceptIds.filter((data) => data.id === props.enquiry.id)[0] && props.acceptIds.filter((data) => data.id === props.enquiry.id)[0].status === "decline"){
        return (
            <p>Declined</p>
        );
    } else {
        return (
            <Form>
            {
                <>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Name
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={props.enquiry.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Email
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" plaintext readOnly defaultValue={props.enquiry.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Check-In
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={new Date(props.enquiry.checkIn).toDateString()} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Check-Out
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control plaintext readOnly defaultValue={new Date(props.enquiry.checkOut).toDateString()} />
                        </Col>
                    </Form.Group>
                    <Button onClick={() => props.handleBtnAccept(props.enquiry.id, 'accept')} variant="primary">Accept</Button>
                    <Button variant="link" onClick={() => props.handleBtnDecline(props.enquiry.id, 'decline')} className="float-right mt-1">Decline</Button>
                </>
            }
        </Form>
        );
    }
}
 
export default EnquiryDetail;