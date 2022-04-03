import React, { useState,useEffect, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";


export const CurrentWether = ({keys, name, locationKey}) => {
    console.log(keys)
    const [cityInfo, setCityInfo] = useState('')
    const {
        addWetherlist,
        removeWetherlist,
        favoriteslist,
    } = useContext(GlobalContext);
    
    const API_KEY = 'Enter your private key'
    
    


    let storedWether = favoriteslist.find((o) => o.keys === keys);
    const wetherlistDisabled = storedWether ? true : false;
        console.log(wetherlistDisabled)

    const padNum = (num) => {
        const stringNum = num + '';
        const stringLen = stringNum.length
        if(stringLen === 1 ) {
            return '0' + stringNum
        } else {
            return stringNum
        }
    }


    useEffect(() => {
        if(locationKey) {
        fetch(`https://dataservice.accuweather.com/currentconditions/v1/${keys}?apikey=${API_KEY}`
        )
        .then(res => res.json())
        .then(res => setCityInfo(res.map(c => {
            return {
                temperature: c.Temperature.Metric.Value,
                unit: c.Temperature.Metric.Unit,
                icon: padNum(c.WeatherIcon),
                weatherText: c.WeatherText,
                name: name,
                keys: keys,
            }
        }))) 
        
    }
    },[locationKey])
    

  return (
    <>
          
        {!!cityInfo && cityInfo.map((city) => (
            <div key={city.keys} >
                <img alt="..." src={`https://developer.accuweather.com/sites/default/files/${city.icon}-s.png`} />
                <a>{city.name}</a>
                <p>{city.temperature}{city.unit}</p>
                <div>
                {wetherlistDisabled ? (
                    <button className="ctrl-btn" onClick={() => removeWetherlist(city.keys)  } >
                        <p >Remove from Wetherlist</p>
                    </button> 
                ) : (
                    <button className="ctrl-btn" onClick={() => addWetherlist(city)  } >
                        <p >Add to Wetherlist</p>
                    </button>
                )} 
                </div>                              
                
            </div>
        ))}
    </>
  )
}
 