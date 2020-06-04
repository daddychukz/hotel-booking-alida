import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, DropdownButton, Dropdown } from 'react-bootstrap';

const AdminNavigation = () => {
    const logout = () => {
        let user = JSON.parse(localStorage.getItem('login'));
        user && (user.isAuthenticated = false);
        localStorage.setItem('login', JSON.stringify(user));
        window.location.reload();
    }
    return (
        <Navbar className="color-nav justify-content-between">
            <Navbar.Brand to="/">
                <Link to="/admin">
                    <Image
                        alt="logo"
                        src="/holidays.svg"
                        width="255"
                    />
                </Link>
            </Navbar.Brand>
            <Nav className="navs">
                <DropdownButton alignRight id="dropdown-item-button" title="Action">
                    <Link to={'/admin/enquiries'}><Dropdown.Item as="button"> Enquiries </Dropdown.Item></Link>
                    <Link to={'/admin/establishment'}><Dropdown.Item as="button">Create Establishment</Dropdown.Item></Link>
                    <Link to={'/admin/messages'}><Dropdown.Item as="button">Messages</Dropdown.Item></Link>
                    <Dropdown.Item as="button" onClick={logout}>Logout</Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Navbar>
    );
}
 
export default AdminNavigation;