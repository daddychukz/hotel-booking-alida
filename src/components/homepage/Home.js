import React, { useState, useEffect, useRef, useContext } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import Search from './Search';

const Home = () => {
    const { options, dispatchOptions } = useContext(SearchContext);
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState([]);
    const wrapperRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
        window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
        setDisplay(false);
        }
    };

    const updateSearch = value => {
        setSearch(value);
        setDisplay(false);
    };
    const onSearchChange = (e) => {
        setSearch(e.target.value)
        e.target.value !== "" ? setDisplay(true) : setDisplay(false)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            dispatchOptions({ type: 'ADD_SEARCH_ITEM', payload: search})
        }
    }
    
    return (
        <Container>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label style={{paddingTop: '1.5em'}} column sm={3}>
                        <h2>Search hotels</h2>
                    </Form.Label>
                    <Col sm={6} ref={wrapperRef}>
                        <Search value={search} onChange={onSearchChange} onKeyPress={handleKeyPress} />
                        {display && (
                            <div className="autoContainer">
                            {options
                                .filter((name) => name.indexOf(search.toLowerCase()) > -1)
                                .map((value, i) => {
                                return (
                                    <div
                                        onClick={() => updateSearch(value)}
                                        className="option"
                                        key={i}
                                        tabIndex="0"
                                    >
                                        <Link to={'/hotel/5ea81baa3851a633426eb827'}>
                                            {value}
                                        </Link>
                                    </div>
                                );
                                })}
                            </div>
                        )}
                        <Row style={{marginTop: '3em'}}>
                            <Col>
                                <section style={{border: '2px solid #8DB5AA'}}>
                                    <Image 
                                        src="/home.png"
                                        alt=""
                                        fluid
                                    />
                                    <Button style={{backgroundColor: "#8DB5AA", border: 'none', borderRadius: 0}} size="lg" block onClick={() => history.push("/hotels")}>
                                        See All Hotels
                                    </Button>
                                </section>
                            </Col>
                        </Row>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
}
 
export default Home;