import React from 'react'

const BookingSlotDetailsContext = React.createContext({
    bookingList: [],
    addBookingSlot: () => {},
    removeBookingSlot: () => {},
    activeDate: new Date(),
    onChangeActiveDate: () => {},
})

export default BookingSlotDetailsContext