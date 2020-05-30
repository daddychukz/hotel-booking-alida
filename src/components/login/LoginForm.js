import React from 'react';
import { Col, Button, Form } from 'react-bootstrap';

const LoginForm = ({ login, setLogin, handleLogin }) => {
    return (
        <Col md={7}>
            <article style={{backgroundColor: '#8DB5AA', color: 'white', padding: '20px'}}>
                <Col lg={10}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={3}>
                             Username
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={login.username}
                                onChange={(e) => setLogin({...login, username: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={3}>
                            Password
                            </Form.Label>
                            <Col>
                            <Form.Control
                                type="password"
                                placeholder="****"
                                value={login.password}
                                onChange={(e) => setLogin({...login, password: e.target.value})}
                            />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Col>
            </article>
            <Button style={{border: 'none', borderRadius: 0}} onClick={handleLogin} size="lg" block>Login</Button>
        </Col>
    );
}
 
export default LoginForm;