import React, { useState } from 'react';
import { BookingContext } from './context';

const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState([]);
    return (
        <BookingContext.Provider value={{booking, setBooking}}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;