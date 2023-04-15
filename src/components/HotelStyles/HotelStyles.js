
import hotelStyles from '../../data/type.json'
import './HotelStyles.css'

function HotelStyles() {
  return (<div className='contain'>
    <h2 className='head-style'>Browse by property type</h2>
    <div className='list-style-hotel'>
      {hotelStyles.map((hotelStyle, index) => (
        <div key={index} className='hotel-type'>

          <div className='image'>
            <img src={hotelStyle.image} alt={hotelStyle.name}></img>
          </div>
          <h3>{hotelStyle.name}</h3>
          <p>{hotelStyle.count}</p>

        </div>

      ))}
    </div>

  </div>);
}

export default HotelStyles;