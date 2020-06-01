import React, { useState, useEffect } from 'react';
import { Col, Card, Row, Container, Spinner } from 'react-bootstrap';
import { BASE_URL, headers } from "../../constants/api";
import EstablishmentDetail from './Establishment';

const Establishments = () => {
    const [establishments, setEstablishments] = useState([]);
    const [acceptIds, setAcceptIds] = useState(JSON.parse(localStorage.getItem('AcceptIds')) || [])

    useEffect(() => {
        const url = BASE_URL + "enquiries";
        async function fetchEstablishments() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setEstablishments(data))
        }
        fetchEstablishments();
    }, []);

    const handleSetStatus = (id, status) => {
        setAcceptIds([...acceptIds, { id, status}])
        console.log(id)
    };


    return (
        <Container className="margin">
            <Row>
            {
                establishments.length ?
                establishments.map((enquiry) => (
                    <Col key={enquiry.id} md={4} className="pb-3">
                        <Card>
                            <Card.Header style={{backgroundColor: '#8DB5AA'}}>Featured</Card.Header> 
                            <Card.Body>
                               <EstablishmentDetail
                                enquiry={enquiry}
                                handleBtnAccept={handleSetStatus}
                                handleBtnDecline={handleSetStatus}
                                acceptIds={acceptIds}
                               />
                            </Card.Body>
                        </Card>            
                    </Col>
                ))
                : <Spinner animation="grow" />
            }
            </Row>
        </Container>
    )
}
 
export default Establishments;