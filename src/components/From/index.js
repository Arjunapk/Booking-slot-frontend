import { Component } from "react"
import { v4 as uuid } from 'uuid';
import BookingSlotDetailsContext from "../../context/BookingSlotDetailsContext"
import NavBar from "../NavBar"
import './index.css'

const bookTimeSlots = ["10:00 - 11:00", "11:15 - 12:15", "12:30 - 01:30", "02:30 - 03:30", "03.45 - 04:45", "05:00 - 06:00"]

class Form extends Component {
    state = {name: '', mobileNumber: '', email: '', time: bookTimeSlots[0]}

    onChangeName = event => {
      this.setState({name: event.target.value})
    }

    onChangeMobileNumber = event => {
      this.setState({mobileNumber: event.target.value})
    }

    onChangeEmail = event => {
      this.setState({email: event.target.value})
    }

    onChangeTime = event => {
      this.setState({time: event.target.value}, () => console.log(this.state))
    }

    onSubmitFormDetails = async date => {
      console.log('start')
      const {name, mobileNumber, email, time} = this.state
      const id = uuid()
      const activeDate = '25/06/2023'
      const userDetails = {id, name, mobileNumber, email, date: activeDate, time}
      console.log(userDetails)
      console.log(1, JSON.stringify(userDetails))
      const url = "https://booking-slot.onrender.com/booking-slot/create"
      console.log(JSON.stringify(userDetails))
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails)
      }
      console.log(2, JSON.stringify(userDetails))
      const response = await fetch(url, options)
      console.log(3, JSON.stringify(userDetails))
      const data = await response.json()
      console.log(data)
      console.log('start')
    }

    render() {
        const {name, mobileNumber, email} = this.state

        return (
          <BookingSlotDetailsContext.Consumer>
            {value => {
              const {activeDate} = value
              const stringDate = activeDate.toLocaleDateString('en-US', {dateStyle: 'full'})

              const onSubmitForm = event => {
                event.preventDefault()
                console.log('starting')
                this.onSubmitFormDetails(activeDate)
              }

              return (
                <>
                  <NavBar />
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <form className="user-details-form" onSubmit={onSubmitForm}>
                          <h1 className="user-details-heading">User Details</h1>
                          <label className="user-details-label" htmlFor="name">Name</label>
                          <input required className="user-details-input form-control" id="name" type='text' value={name} onChange={this.onChangeName} placeholder="Name" />
                          <label className="user-details-label" htmlFor="mobileNumber">Mobile number</label>
                          <input required className="user-details-input form-control" id="mobileNumber" type='number' value={mobileNumber} onChange={this.onChangeMobileNumber} placeholder="Mobile Number" />
                          <label className="user-details-label" htmlFor="email">Email</label>
                          <input required className="user-details-input form-control" id="email" type='email' value={email} onChange={this.onChangeEmail} placeholder="Email" />
                          <label className="user-details-label" htmlFor="time">Slot Time</label>
                          <select className="user-details-input form-control" onChange={this.onChangeTime}>
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
}

export default Form