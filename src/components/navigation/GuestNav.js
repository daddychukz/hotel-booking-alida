import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

const GuestNavigation = () => {
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
                <Nav><Link className="nav-link" to={'/'}>Home</Link></Nav>
                <Nav><Link className="nav-link" to={'/contact'}>Contact Us</Link> </Nav>
                <Nav><Link className="nav-link" to={'/login'}>Admin login</Link></Nav>
            </Nav>
        </Navbar>
    );
}
 
export default GuestNavigation;