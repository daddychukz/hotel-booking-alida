import React, { createContext, useReducer, useEffect } from 'react';
import { searchReducer } from '../reducers/searchReducer';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [options, dispatchOptions] = useReducer(searchReducer, [], () => {
        const localData = localStorage.getItem('search-item').split(',');
        return localData ? localData : []        // set default value from localstorage data
    });
    useEffect(() => {
        localStorage.setItem('search-item', options)
    }, [options]);

    return (
        <SearchContext.Provider value={{options, dispatchOptions}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;