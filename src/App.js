import {Component} from 'react'
import './App.css';

class App extends Component {
  state = {bookingList: []}

  render() {
    const {bookingList} = this.state

    return (<h1>App</h1>)
  }
}

export default App;
