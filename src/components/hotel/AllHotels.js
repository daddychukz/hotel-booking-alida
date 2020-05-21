import React, { useContext, useEffect } from 'react';
import { Row, Col, Button, Media, Container, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { HotelContext } from '../context/HotelContext';
import { BASE_URL, headers } from '../constants/api';

const AllHotels = () => {
    const { hotels, dispatchHotels } = useContext(HotelContext);
    const url = BASE_URL + 'establishments';
    const history = useHistory();

    useEffect(() => {
        async function fetchHotels() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => dispatchHotels({ type: 'GET_ALL_HOTELS', payload: data }))
            .catch(err => console.log(err))
        }
        fetchHotels()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const DisplayHotels = () => (
            hotels.map((hotel) => (
                    <Media key={hotel.id} className="mb-5" style={{backgroundColor: '#8DB5AA', color: 'white', fontSize: '20px', width: '70%'}}>
                        <Image
                            width={150}
                            className="mr-4"
                            src={hotel.image}
                            alt="hotel image"
                            fluid
                        />
                        <Media.Body>
                            <h3>{hotel.name}</h3>
                            <p>Guests: &nbsp; {hotel.maxGuests}</p><br/>
                            <Row>
                                <Col>
                                    <p>${hotel.price} per night</p>
                                </Col>
                                <Col lg={3}>
                                    <Button style={{border: 'none', borderRadius: 0}} onClick={() => history.push(`/hotel/${hotel.id}`)}>Choose</Button>
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
            ))
    )

    return (
        hotels.length ? (
            <Container>
                <Row>
                    <Col>
                        <h2>All our Hotels</h2>
                        <DisplayHotels/>
                    </Col>
                </Row>
            </Container>
        ) : <p>Fetching hotels...</p>
    );
}
 
export default AllHotels;