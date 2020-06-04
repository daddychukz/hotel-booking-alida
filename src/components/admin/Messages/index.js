import React, { useState, useEffect } from 'react';
import { Col, Card, Row, Container, Spinner } from 'react-bootstrap';
import { BASE_URL, headers } from "../../constants/api";
import MessageDetail from './Message';
import RespondModal from './Respond';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [responses, setResponses] = useState(JSON.parse(localStorage.getItem('Responses')) || [])
    const [message, setMessage] = useState({
        email: '',
        message: ''
    })
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const url = BASE_URL + "contacts";
        async function fetchMessages() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setMessages(data))
        }
        fetchMessages();
    }, []);

    const handleSendMessage = () => {
        setResponses([...responses, message]);
        setModal(false);
    };

    const handleModalAction = (email, value) => {
        setModal(value)
        if(email){
            setMessage({...message, email})
        }
    };

    useEffect(() => {
        if (responses.length) {
            console.log(messages)
            localStorage.setItem('Responses', JSON.stringify(responses));
        }
    },[responses]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container className="margin">
            <Row>
            {
                messages.length ?
                messages.map((contact, index) => (
                    <Col key={contact.id} md={4} className="pb-3">
                        <Card>
                            <Card.Header style={{backgroundColor: '#8DB5AA'}}>Mail {index + 1}</Card.Header> 
                            <Card.Body>
                               <MessageDetail
                                contact={contact}
                                handleOpenModal={handleModalAction}
                                // acceptIds={acceptIds}
                               />
                            </Card.Body>
                        </Card>            
                    </Col>
                ))
                : <Spinner animation="grow" />
            }
            { modal ?
            <RespondModal
                open={modal}
                handleClick={handleSendMessage}
                handleClose={handleModalAction}
                message={message}
                setMessage={setMessage}
            /> : null
            }
            </Row>
        </Container>
    )
}
 
export default Messages;