import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import NavBar from '../NavBar'
import Calendar from 'react-calendar';
import './index.css'
import 'react-calendar/dist/Calendar.css';
import BookingSlotDetailsContext from '../../context/BookingSlotDetailsContext';

const Home = props => {
  const [date, onChangeActive] = useState(new Date())

  const dayName = date.toLocaleDateString('en-US', {dateStyle: 'full'})
  
  const navigate = useNavigate()
  const onClickDate = () => {
    navigate('/book-slot')
  }

  return (
    <BookingSlotDetailsContext.Consumer>
      {value => {
        const {onChangeActiveDate} = value

        const onClickDay = (value) => {
          onChangeActiveDate(value)
          onClickDate()
        }


        return (
          <>
            <NavBar />
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='home-container'>
                    <h1 className='home-heading'>Select Date and Book Slot</h1>
                    <Calendar value={date} onChange={onChangeActive} minDate={new Date()} maxDate={new Date(2023, 7, 23)} onClickDay={onClickDay} />
                    {dayName}
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

export default Home