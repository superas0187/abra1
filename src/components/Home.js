import React, { useState,useEffect } from 'react';
import {CurrentWether } from './CurrentWether'
import {DayDeily } from './DayDeily'
import { useLocation } from "react-router-dom";



export const Home = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [locationKey, setLocationKey] = useState('');
  const  cityName  = location?.state?.data
  // const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    if(cityName) {
      setQuery(cityName) 
    }
  },[cityName])
  
  
  
  
    useEffect(() => {
     
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.API_KEY}&q=${query}`
        )
        .then(res => res.json())
        .then(res => res.map(k => setLocationKey({
            keys: k.Key,
            name: k.LocalizedName,
            state: k.AdministrativeArea.ID,
        })))
            
    },[query])

  return (
    <div>
      <div className='searchQ'>
        <input type="text"className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
          
      <div>
        <CurrentWether locationKey={locationKey} keys={locationKey.keys} name={locationKey.name}/>
      </div>
        <DayDeily locationKey={locationKey} keys={locationKey.keys} />
    </div>
  )
}




