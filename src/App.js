import {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/From';
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
      this.setState({bookingList: updatedData}, () => console.log(this.state))
    }
  }

  onChangeActiveDate = value => {
    this.setState({activeDate: value})
  }

  render() {
    const {bookingList, activeDate} = this.state

    return (
      <BookingSlotDetailsContext.Provider value={{bookingList, activeDate, onChangeActiveDate: this.onChangeActiveDate}}>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/book-slot' Component={Form} />
        </Routes>
      </BookingSlotDetailsContext.Provider>
    )
  }
}

export default App;
