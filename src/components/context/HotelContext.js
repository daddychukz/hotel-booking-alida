import React, { createContext, useReducer } from 'react';
import { hotelReducer } from '../reducers/hotelReducer';

export const HotelContext = createContext();

const HotelContextProvider = (props) => {
    const [hotels, dispatchHotels] = useReducer(hotelReducer, []);

    return (
        <HotelContext.Provider value={{hotels, dispatchHotels}}>
            {props.children}
        </HotelContext.Provider>
    )
}

export default HotelContextProvider;