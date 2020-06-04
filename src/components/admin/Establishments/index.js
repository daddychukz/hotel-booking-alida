import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import { Container, Col, Row } from 'react-bootstrap';
import EstablishmentForm from './EstablishmentForm';

const AddEstablishment = () => {
    const [establishments, setEstablishments] = useState(JSON.parse(localStorage.getItem('Establishments')) || [])
    const [establishment, setEstablishment] = useState({
        id: uuid(),
        name: '',
        email: '',
        image: '',
        price: '',
        maxGuest: '',
        latitude: '',
        longitude: '',
        selfCatering: false,
        description: ''
    });
    const [submit, setSubmit] = useState(false);

    const handleSubmitEstablishment = (e) => {
        e.preventDefault();
        setEstablishments([...establishments, establishment]);
        setSubmit(true)
    }

    useEffect(() => {
        if (establishments.length) {
            console.log(establishments)
            localStorage.setItem('Establishments', JSON.stringify(establishments));
        }
    },[submit]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <section style={{height: '100vh'}}>
                <Row>
                    <Col md={{ offset: 2 }} style={{ paddingLeft: '4em'}}>
                    {
                        submit ? <h3>New Establishment Created!</h3>
                        : <h3>Create a new Establishment</h3>
                    }
                    </Col>
                </Row>
                {
                    submit ? null :
                    <Row className="justify-content-md-center">
                        <EstablishmentForm
                            establishment={establishment}
                            setEstablishment={setEstablishment}
                            handleSubmitEstablishment={handleSubmitEstablishment}
                        />
                    </Row>
                }
            </section>
        </Container>
    );
}
 
export default AddEstablishment;