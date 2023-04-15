import hotels from '../../data/hotel_list.json'
import './HotelList.css'
import { Link } from 'react-router-dom';

function HotelList() {
  return (<div className='contain'>
    <h2 className='head-style'>Home guests love</h2>
    <div className='hotel-list'>
      {hotels.map((hotel, index) => (
        <div className='hotel-item' key={index}>
          <div className='image'>
            <img src={hotel.image_url} alt={hotel.name}></img>
          </div>
          <Link to='/detail' className=''>{hotel.name}</Link>
          <p className='hotel-item-city'>{hotel.city}</p>
          <p className='price'>Starting from ${hotel.price}</p>
          <div className='rate'>
            <span className='rate-point'>{hotel.rate}</span>
            <p className='rate-type'>{hotel.type}</p>
          </div>

        </div>
      ))}
    </div>
  </div>);
}

export default HotelList;