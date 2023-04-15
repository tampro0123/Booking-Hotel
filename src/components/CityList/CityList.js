import cityList from '../../data/city.json'
import './CityList.css'

function CityList() {
  return (<div className='list-city'>
    {cityList.map((city, index) => (
      <div className='item-city' key={index}>
        <img src={city.image} alt='nothing'></img>
        <h2 className='city-name'>{city.name}</h2>
        <h3 className='city-subtext' >{city.subText}</h3>
      </div>
    ))}
  </div>);
}

export default CityList;