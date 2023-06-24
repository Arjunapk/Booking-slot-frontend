import {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/From';
import BookingSlotDetailsContext from './context/BookingSlotDetailsContext'
import './App.css';

class App extends Component {
  state = {bookingList: [], activeDate: new Date()}

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
