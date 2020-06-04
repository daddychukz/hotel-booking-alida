import React from 'react';

export default (ComposedComponent) => {
    class Authenticate extends React.Component {

        componentWillMount() {
            const login = JSON.parse(localStorage.getItem('login'));
            if (!login.isAuthenticated) {
                this.props.history.push('/');
            }
        }
        render() { 
            return (
                <ComposedComponent />
            );
        }
    }
    return Authenticate;
}
