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
            <li className="booking-list-item">
                <p className="history-serial-no fw-bold">S/N</p>
                <p className="history-name fw-bold">Name</p>
                <p className="history-mobile-no fw-bold">Mobile No.</p>
                <p className="history-email fw-bold">Email</p>
                <p className="history-date fw-bold">Date</p>
                <p className="history-time fw-bold">Time</p>
            </li>
            {bookingList.map((each, index) => {
                const {id, name, mobileNumber, email, date, time} = each

                return (
                    <li key={id} className="booking-list-item">
                        <p className="history-serial-no">{index + 1}</p>
                        <p className="history-name">{name}</p>
                        <p className="history-mobile-no">{mobileNumber}</p>
                        <p className="history-email">{email}</p>
                        <p className="history-date">{date}</p>
                        <p className="history-time">{time}</p>
                    </li>
                )
            })}
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
                            <button type="button" className="btn btn-primary align-self-center" onClick={onClickBookSlot}>Book Slot</button>
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