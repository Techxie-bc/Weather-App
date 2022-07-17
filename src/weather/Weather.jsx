import React, {useState} from 'react';
import axios from 'axios';
import './weather.css';

const Weather = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b279a83c70a24da66de449fc2e440f92`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      
      axios.get(url).then((response) => {
        setData(response.data)
       
      })
      console.log(location)
      setLocation('')
    }
  } 
  return (
    <div className="container">
      <div className="search">
        <input
          placeholder='Enter Location'
          type='text'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="cover">
        
      <div className="top">
        <div className="location">
            <p>{data.name}</p>
        </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} F</h1> : null}
        </div>
        <div className="desc">
            {data.weather ? <h1>{data.weather[0].main}</h1> : null}
        </div>
      </div>
      <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like} C</p> : null}
            
            <p>Feels Like</p>
        </div>
        <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
        </div>
        <div className="wind">
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Weather