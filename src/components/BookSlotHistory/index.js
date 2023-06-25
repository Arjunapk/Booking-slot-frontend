import { useNavigate } from "react-router-dom";
import BookingSlotDetailsContext from "../../context/BookingSlotDetailsContext";
import NavBar from "../NavBar";
import './index.css'

const BookSlotHistory = () => {
    const navigate = useNavigate()
    const onClickBookSlot = () => {
        navigate('/book-slot')
    }

    const renderList = bookingList => (
        <ul className="booking-list-card">
            {bookingList.map(each => (
                <li key={each.id} className="booking-list-item">{each.name}</li>
            ))}
        </ul>
    )

    return (
        <BookingSlotDetailsContext.Consumer>
            {value => {
                const {bookingList} = value

                return (
                    <>
                    <NavBar />
                    <div className="book-slot-history-container">
                        {bookingList.length > 0 ? renderList(bookingList) : 
                        (<>
                            <img className="history-image" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="history" />
                            <p className="history-description">No slots are Booking</p>
                            <button type="button" className="btn btn-pri" onClick={onClickBookSlot}>Book Slot</button>
                            </>
                        )}
                    </div>
                    </>
                )
            }}
        </BookingSlotDetailsContext.Consumer>
    )
}

export default BookSlotHistory