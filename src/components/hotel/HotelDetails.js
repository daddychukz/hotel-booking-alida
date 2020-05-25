import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../constants/api';

const HotelDetail = (props) => {
    const url = BASE_URL + `establishments/${props.match.params.hotelId}`;
    const [hotel, setHotel] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        async function fetchHotel() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch(err => console.log(err))
        }
        fetchHotel()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <section style={{height: '100vh'}}>
                <Row>
                    <Col>
                        <h2>{hotel.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Image 
                            src={hotel.image}
                            alt="hotel"
                            height="500"
                            thumbnail
                        />
                    </Col>
                    <Col xs={7}>
                        <article style={{backgroundColor: '#8DB5AA', color: 'white', fontSize: '20px', padding: '10px'}}>
                            <Row>
                                <Col sm={3}>
                                    <p>Guest</p>
                                </Col>
                                <Col sm={2}>
                                    >
                                </Col>
                                <Col>
                                    <p>{hotel.maxGuests}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <p>Price</p>
                                </Col>
                                <Col sm={2}>
                                    >
                                </Col>
                                <Col>
                                    <p>{hotel.price}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <p>Self-catering</p>
                                </Col>
                                <Col sm={2}>
                                    >
                                </Col>
                                <Col>
                                    <p>{`${hotel.selfCatering}`}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <p>Email</p>
                                </Col>
                                <Col sm={2}>
                                    >
                                </Col>
                                <Col>
                                    <p>{hotel.email}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <p>Description</p>
                                </Col>
                                <Col sm={2}>
                                    >
                                </Col>
                                <Col>
                                    <p>{hotel.description}</p>
                                </Col>
                            </Row>
                        </article>
                        <Button style={{border: 'none', borderRadius: 0}} size="lg" block onClick={() => history.push("/hotels/enquiry/1234")}>Book Now</Button>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
 
export default HotelDetail;