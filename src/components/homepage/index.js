import React from 'react';
import Home from './Home';
import SearchContextProvider from '../context/SearchContext';

const HomePage = () => {
    return ( 
        <SearchContextProvider>
            <Home/>
        </SearchContextProvider>
    );
}
 
export default HomePage;