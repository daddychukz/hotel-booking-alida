import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className="color-nav justify-content-between">
            <Navbar.Brand to="/">
                <Link to="/">
                    <Image
                        alt="logo"
                        src="/holidays.svg"
                        width="255"
                    />
                </Link>
            </Navbar.Brand>
            <Nav className="navs">
                <Nav.Link className="nav-font" href="/">Home</Nav.Link>
                <Nav.Link className="nav-font" href="/contact">Contact us</Nav.Link>
                <Nav.Link className="nav-font" href="/login">Admin login</Nav.Link>
            </Nav>
        </Navbar>
    );
}
 
export default Navigation;