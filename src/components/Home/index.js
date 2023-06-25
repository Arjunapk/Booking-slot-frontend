import { useNavigate } from "react-router-dom"
import NavBar from "../NavBar"
import './index.css'

const Home = () => {
  const navigate = useNavigate()

  const onClickBookSlot = () => {
    navigate('/book-slot')
  }

  const onClickBookSlotHistory = () => {
    navigate('/book-slot/history')
  }

  return (
    <>
      <NavBar />
      <div className="home-container">
        <h1 className="home-heading">Welcome to APK technical solutions!</h1>
        <p className="home-description">With the labor market in an unpredictable state and technology rapidly changing the way businesses run, HR requires tools to help them hire, manage and retain employees the success of an organization depends on it. HR project management is a smarter way of working that enables HR teams to carry out their tasks and plans in an organized, efficient manner.</p>
        <div className="home-button-card">
          <button className="home-button btn btn-primary" type="button" onClick={onClickBookSlot}>Book Slot</button>
          <button className="home-button btn btn-primary" type="button" onClick={onClickBookSlotHistory}>Slot History</button>
        </div>
      </div>
    </>
  )
}

export default Home