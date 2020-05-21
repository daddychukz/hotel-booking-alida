import React from 'react';
import AllHotels from './AllHotels';
import HotelContextProvider from '../context/HotelContext';

const Hotels = () => {
    return (
        <HotelContextProvider>
            <AllHotels/>
        </HotelContextProvider>
    );
}
 
export default Hotels;