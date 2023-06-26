import {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import BookSlot from './components/BookSlot'
import Form from './components/From';
import BookSlotHistory from './components/BookSlotHistory';
import BookingSlotDetailsContext from './context/BookingSlotDetailsContext'
import './App.css';


class App extends Component {
  state = {bookingList: [], activeDate: new Date()}

  componentDidMount() {
    this.getBookingList()
  }

  getBookingList = async () => {
    const url = 'https://booking-slot.onrender.com/booking-slot/user-details'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.map(each => ({
        id: each.id,
        name: each.name,
        mobileNumber: each.mobile_number,
        email: each.email,
        date: each.date,
        time: each.time,
      }))
      this.setState({bookingList: updatedData})
    }
  }

  onChangeActiveDate = value => {
    this.setState({activeDate: value})
  }

  addBookingSlot = newBookingSlot => {
    this.setState(prevState => ({bookingList: [...prevState.bookingList, newBookingSlot]}), () => console.log(this.state.bookingList))
  }

  removeBookingSlot = id => {
    this.setState(prevState => ({
      bookingList: prevState.bookingList.filter(each => each.id !== id)
    }))
  }


  render() {
    const {bookingList, activeDate} = this.state

    return (
      <BookingSlotDetailsContext.Provider value={{bookingList, addBookingSlot: this.addBookingSlot, removeBookingSlot: this.removeBookingSlot, activeDate, onChangeActiveDate: this.onChangeActiveDate}}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/book-slot' element={<BookSlot />} />
          <Route exact path='/book-slot/user-details' element={<Form />} />
          <Route exact path='/book-slot/history' element={<BookSlotHistory />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BookingSlotDetailsContext.Provider>
    )
  }
}

export default App;
