import React from 'react'

const BookingSlotDetailsContext = React.createContext({
    bookingList: [], activeDate: new Date(),
})

export default BookingSlotDetailsContext