import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';

class Login extends React.Component {
    componentDidMount() {
        // const login = JSON.parse(localStorage.getItem('login'));
        if (this.props.auth.login.isAuthenticated) {
            this.props.history.push('/admin');
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const { login, setLogin } = this.props.auth;
        const user = {
            username: login.username,
            password: login.password
        };
        // localStorage.setItem('login', JSON.stringify(user))
        const admin = JSON.parse(localStorage.getItem('login'));
        if (admin && (user.username === admin.username)) {
            setLogin({ ...login, isAuthenticated: true })
            this.props.history.push('/admin');
        }
        console.log(login)
    }

    render() {
        return (
            <Container>
                <section>
                    <Row>
                        <Col>
                            <h2 className="text-center">Admin Area</h2>
                        </Col>
                    </Row>
                        <Row className="justify-content-md-center">
                            <LoginForm
                                handleLogin={this.handleLogin.bind(this)}
                                login={this.props.auth.login}
                                setLogin={this.props.auth.setLogin}
                            />
                        </Row>
                </section>
            </Container>
        );
    }

}
 
export default Login;