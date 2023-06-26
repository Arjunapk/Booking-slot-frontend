import { useNavigate } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai'
import {toast} from 'react-toastify'
import BookingSlotDetailsContext from "../../context/BookingSlotDetailsContext";
import NavBar from "../NavBar";
import './index.css'

const BookSlotHistory = () => {
    const navigate = useNavigate()
    const onClickBookSlot = () => {
        navigate('/book-slot')
    }

    const renderList = (bookingList, removeBookingSlot) => (
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

                const onClickDelete = () => {
                    removeBookingSlot(id)
                    toast.success('Booking Slot successfully deleted!', {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                }

                return (
                    <li key={id} className="booking-list-item">
                        <p className="history-serial-no">{index + 1}</p>
                        <p className="history-name">{name}</p>
                        <p className="history-mobile-no">{mobileNumber}</p>
                        <p className="history-email">{email}</p>
                        <p className="history-date">{date}</p>
                        <p className="history-time">{time}</p>
                        <button className="delete-icon btn btn-outline" onClick={onClickDelete}>
                            <AiFillDelete color="#ff0000" />
                        </button>
                    </li>
                )
            })}
        </ul>
    )

    return (
        <BookingSlotDetailsContext.Consumer>
            {value => {
                const {bookingList, removeBookingSlot} = value

                return (
                    <>
                    <NavBar />
                    <div className="book-slot-history-container">
                        {bookingList.length > 0 ? renderList(bookingList, removeBookingSlot) : 
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