import { useDispatch, useSelector } from 'react-redux'
import TopMenu from './TopMenu'
import { fetchCity } from '../slice/weatherSlice'
import '../css/Whole.css'
import { useEffect } from 'react'

function Whole({ windDirection, change, cities }) {
   const dispatch = useDispatch()
   const { citys, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      if (citys.length === 0) {
         cities.forEach((city) => {
            dispatch(fetchCity(change(city)))
         })
      }
   }, [dispatch])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>
   return (
      <div>
         <TopMenu />
         <ul>
            {citys.map((city) => {
               return (
                  <li key={city.name} className="card">
                     <div className="left">
                        <p>{city.name}</p>
                        <img className="city_img" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="weather icon" />
                        <p>날씨 : {city.weather[0].description}</p>
                     </div>
                     <div className="right">
                        <p>온도: {city.main.temp}°C</p>
                        <p>체감온도: {city.main.feels_like}°C</p>
                        <p>1시간 강수량: {city.rain?.['1h'] ? `${city.rain['1h']}mm` : '없음'}</p>

                        <p>습도: {city.main.humidity}%</p>
                        <p>풍속: {city.wind.speed} m/s</p>
                        <p>풍향: {windDirection(city.wind.deg)}</p>
                     </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default Whole
