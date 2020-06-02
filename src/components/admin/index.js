import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const AdminComp = () => {
    return ( 
        <Container>
            <Row>
                <Col>
                    <div className="text-center" style={{ backgroundColor: '#8DB5AA', height: '100%', padding: '100px 0px' }}>
                        <h4>Enquiries</h4>
                        <Link to={"/admin/enquiries"}>
                            <Image
                                src="/enquiry.svg"
                                width="70"
                                alt="Holidaze Logo"
                                className="middle"
                            />
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className="text-center" style={{ backgroundColor: '#8DB5AA', height: '100%', padding: '100px 0px' }}>
                        <h4>Create Establishment</h4>
                        <Link to={""}>
                            <Image
                                src="/estb.svg"
                                width="70"
                                alt="Holidaze Logo"
                            />
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className="text-center" style={{ backgroundColor: '#8DB5AA', height: '100%', padding: '100px 0px' }}>
                        <h4>Messages</h4>
                        <Link to={""}>
                            <Image
                                src="/messages.svg"
                                width="70"
                                alt="Holidaze Logo"
                            />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminComp;