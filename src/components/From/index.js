import { useState } from "react"
import { v4 as uuid } from 'uuid';
import { useNavigate, redirect } from "react-router-dom";
import {toast} from 'react-toastify'
import {format} from 'date-fns'
import 'react-toastify/dist/ReactToastify.css';
import BookingSlotDetailsContext from "../../context/BookingSlotDetailsContext"
import NavBar from "../NavBar"
import './index.css'

const bookTimeSlot = ["10:00 - 11:00", "11:15 - 12:15", "12:30 - 01:30", "02:30 - 03:30", "03.45 - 04:45", "05:00 - 06:00"]

function Form() {
  const [name, changeName] = useState('')
  const [mobileNumber, changeMobileNumber] = useState('')
  const [email, changeEmail] = useState('')
  let [time, changeTime] = useState('')
  const navigate = useNavigate()

  let bookTimeSlots = bookTimeSlot

  const onChangeName = event => {
    changeName(event.target.value)
  }

  const onChangeMobileNumber = event => {
      changeMobileNumber(event.target.value)
  }
  const onChangeEmail = event => {
      changeEmail(event.target.value)
  }

  const onChangeTime = event => {
      changeTime(event.target.value)
  }

  const onSubmitUserDetails = (date, addBookingSlot) => {
    if (time === '') {
      time = bookTimeSlots[0]
    }
    const userDetails = {id: uuid(), name, mobileNumber, email, date, time}
    addBookingSlot(userDetails)
    toast.success('Book slot successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      navigate('/')
  }

  return (
    <BookingSlotDetailsContext.Consumer>
      {value => {
        const {activeDate, addBookingSlot, bookingList} = value
        const stringDate = format(activeDate, 'dd-MM-yyyy EEE')

        const onSubmitForm = event => {
          event.preventDefault()
          onSubmitUserDetails(stringDate, addBookingSlot, bookingList)
        }

        const activeDateBookingList = bookingList.filter(each => each.date === stringDate)
        bookTimeSlots = bookTimeSlots.filter(each => {
          const activeDateBookingListTime = activeDateBookingList.filter(list => list.time === each)
          if (activeDateBookingListTime.length < 5) {
            return true
          }
          return false
        })

        if (bookTimeSlots.length === 0) {
          redirect('/book-slot')
          toast.error('Slot Time is not available choose other date', {
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

        return  (
          <>
            <NavBar />
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form className="user-details-form" onSubmit={onSubmitForm}>
                    <h1 className="user-details-heading">User Details</h1>
                    <label className="user-details-label" htmlFor="name">Name</label>
                    <input required  className="user-details-input form-control" id="name" type='text' value={name} onChange={onChangeName} placeholder="Name" />
                    <label className="user-details-label" htmlFor="mobileNumber">Mobile number</label>
                    <input required  className="user-details-input form-control" id="mobileNumber" type='number' value={mobileNumber} onChange={onChangeMobileNumber} placeholder="Mobile Number" />
                    <label className="user-details-label" htmlFor="email">Email</label>
                    <input required  className="user-details-input form-control" id="email" type='email' value={email} onChange={onChangeEmail} placeholder="Email" />
                    <label className="user-details-label" htmlFor="time">Slot Time</label>
                    <select required className="user-details-input form-control" onChange={onChangeTime}>
                      {bookTimeSlots.map(each => (
                        <option key={each} value={each}>{each}</option>
                      ))}
                    </select>
                    <p className="user-details-date">Date : {stringDate}</p>
                    <button type="submit" className="user-details-button btn btn-primary">Book Slot</button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )
      }}
    </BookingSlotDetailsContext.Consumer>
  )

}

export default Form