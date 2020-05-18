import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from 'react-bootstrap';


const SearchComponent = () => {
    return (
        <InputGroup>
            <Form.Control style={{height: '5em', border: '1px solid', borderRight: 'none'}} placeholder="Search..." />
            <FontAwesomeIcon style={{height: '80px', border: '1px solid', borderLeft: 'none'}} icon={faSearch} size="lg" fixedWidth />
        </InputGroup>
    );
}
 
export default SearchComponent;