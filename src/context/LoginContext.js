import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
        isAuthenticated: false
    });
    // useEffect(() => {
    //     localStorage.setItem('search-item', options)
    // }, [options]);

    return (
        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    );
}
 
export default LoginContextProvider;