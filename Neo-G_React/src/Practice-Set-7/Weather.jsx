import React, {useState, useEffect} from 'react'
import { weatherApi } from './api'
const Weather = () => {


    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            const weatherData = await weatherApi('https://example.com/api/weather')
            try{
                const data = weatherData.data
                console.log(data);
            }
            catch(error){
                console.error(error.message)
            }
        }
        fetchWeatherData();
    },[])
    
  return (
    <div>
      
    </div>
  )
}

export default Weather
