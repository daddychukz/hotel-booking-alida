import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className="color-nav justify-content-between">
            <Navbar.Brand to="/">
            <img
                alt=""
                src="/holidays.svg"
                width="255"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Nav className="navs">
                <Nav.Link className="nav-font" href="/home">Home</Nav.Link>
                <Nav.Link className="nav-font" href="/contact">Contact us</Nav.Link>
                <Nav.Link className="nav-font" href="/login">Admin login</Nav.Link>
            </Nav>
        </Navbar>
    );
}
 
export default Navigation;