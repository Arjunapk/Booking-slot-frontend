import React from 'react'

const BookingSlotDetailsContext = React.createContext({
    bookingList: [],
    addBookingSlot: () => {},
    activeDate: new Date(),
    onChangeActiveDate: () => {},
})

export default BookingSlotDetailsContext