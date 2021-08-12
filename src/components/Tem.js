import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Temappp.css';

function Temapp() {

    const [search, setSearch] = useState("")
    const [show, setShow] = useState([])
    const [weth, setWeth] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
            console.log(response)
            setShow(response.data.main)
            setWeth(response.data.weather[0].main)
        }
        getData();
    }, [search])

    return (
        <div>
            <div className="weather-side">
                <div className="weather-gradient" />
                <div className="date-container">
                    <i className="location-icon" data-feather="map-pin" />
                </div>
                <div className="weather-container"><i className="weather-icon" data-feather="sun" />
                    <h3 className="weather-desc">Temp_max : {show.temp_max}</h3>
                    <h3 className="weather-desc">Temp_min : {show.temp_min}</h3>
                </div>
            </div>
            <div className="info-side">
                <div className="today-info-container">
                    <div className="today-info">
                        <div className="precipitation"> <span className="title">Pressure : {show.pressure}</span>
                            <div className="clear" />
                        </div>
                        <div className="humidity"> <span className="title"> Humidity : {show.humidity}</span>
                            <div className="clear" />
                        </div>
                        <div className="wind"> <span className="title">feels_like : {show.feels_like}</span>
                            <div className="clear" />
                        </div>
                        <div className="wind"> <span className="title">Cloud Cover : {weth}</span>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
                <div className="location-container">
                    <input type="text" classname="location-button"
                        onChange={(e) => setSearch(e.target.value)} />
                    <i data-feather="map-pin" />
                    <span>Enter location</span>
                </div>
            </div>
        </div>


    )
}

export default Temapp;