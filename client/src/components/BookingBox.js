/**
 * Internal Modules
 **/
import { bookings } from '../mock_data/bookings'
import './styles/BookingBox.scss'
import DatePicker from "react-date-picker";
import { searchContext } from "../providers/SearchProvider";
import useContext from "../providers/SearchProvider"
import "./styles/DatePicker.scss";


export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  const { startDate, endDate, setStartDate, setEndDate } = useContext(searchContext);
  console.log(startDate, "&&&&&&&&&&&&&&&&&&")
  
  // we can check the result in bookings page.
  const handleBooking = () => {
    const currentUser = 1
    const bookingObj = {}
    bookingObj['user_id'] = currentUser
    bookingObj['package_id'] = props.packageID
    bookings.push(bookingObj)
    console.log(bookings)
    alert(`Package ${props.packageID} added `)
  }

  return (
    <div className='booking-box-container'>
      <div className='booking-info'>
        <h4>Price:{props.price}</h4>
        <span>
          <DatePicker onChange={setStartDate} value={startDate} />
        </span>
        <span>
          <DatePicker onChange={setEndDate} value={endDate} />
        </span>
        <h4>Booking tool stuff (start date end date party size)</h4>
      </div>
      <button className='btn-booking' onClick={handleBooking}>
        BOOK
      </button>
    </div>
  )
}
