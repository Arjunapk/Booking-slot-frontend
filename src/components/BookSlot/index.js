import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import NavBar from '../NavBar'
import Calendar from 'react-calendar';
import {toast} from 'react-toastify'
import './index.css'
import 'react-calendar/dist/Calendar.css';
import BookingSlotDetailsContext from '../../context/BookingSlotDetailsContext';

const BookSlot = props => {
    const [date, onChangeActive] = useState(new Date())
    
    const navigate = useNavigate()
    const onClickDate = () => {
      navigate('/book-slot/user-details')
    }
  
    return (
      <BookingSlotDetailsContext.Consumer>
        {value => {
          const {onChangeActiveDate} = value
  
          const onClickDay = (value) => {
            if (value.getDay() === 5) {
              toast.warn('All Fridays are Holiday choose other day', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });              
            } else {
              onChangeActiveDate(value)
              onClickDate()
            }
          }
  
  
          return (
            <>
              <NavBar />
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='book-slot-container'>
                      <h1 className='book-slot-heading'>Select Date and Book Slot</h1>
                      <Calendar value={date} onChange={onChangeActive} minDate={new Date()} maxDate={new Date(2023, 7, 23)} onClickDay={onClickDay} />
                    </div>
                  </div>
                </div>
              </div>
            </>
        )
        }}
      </BookingSlotDetailsContext.Consumer>
    )
}

export default BookSlot