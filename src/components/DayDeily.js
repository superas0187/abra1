import React, { useState,useEffect } from 'react';
import {WetherDay } from './WetherDay'
export const DayDeily = ({keys, locationKey}) => {

    const [weatherInfo, setWeatherInfo] = useState();
    const API_KEY = 'TfflqvjViOHJchhlq9CgdrtVjT0Aaeki'
    

    

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

        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];

        if(locationKey) {
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${keys}?apikey=${API_KEY}&metric=true`
            )
            .then(res => res.json())
            .then(res => {
                setWeatherInfo(res.DailyForecasts
                .map(df => {
                    return {
                        min: df.Temperature.Minimum.Value,
                        max: df.Temperature.Maximum.Value,
                        wetherType: df.Day.IconPhrase,
                        wetherKey: padNum(df.Day.Icon),
                        dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
                    }
                }))
            })
        }
    },[locationKey])

  return (
    <div style={{display: 'flex', marginLeft: '7px'}} >
        {!!weatherInfo && weatherInfo.map((i, index) => (
            <div key={index}>
                <WetherDay dayOfWeek={i.dayOfWeek} maxDay={i.maxDay}   max={i.max} wetherKey={i.wetherKey} wetherType={i.wetherType} />
            </div>
        ))}
    </div>
  )
}
