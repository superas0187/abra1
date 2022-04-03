import React from 'react'
import { Link } from "react-router-dom";

export const WetherCard = ({city}) => {  
  

 
  return (
    <Link to='/' state={{ data: city.name }}>
        <div className='wethercard'   >
            <img alt="..." src={`https://developer.accuweather.com/sites/default/files/${city.icon}-s.png`} />
            <p>{city.name}</p>
            <p>{city.weatherText}</p>
            <p>{city.temperature}{city.unit}</p>
        </div>
    </Link> 
  )
}
