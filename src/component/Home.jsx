import styled from 'styled-components'
import TopMenu from './TopMenu'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../slice/weatherSlice'
import '../css/Home.css'

const StyledButton = styled.button`
   background-color: #78ff95;
   width: 11%;
   height: 61px;
   border-radius: 27px;

   border: 0px;
   font-size: 24px;
   font-weight: bold;
   margin: 5px;
   &:hover {
      background-color: #1cff4d;
   }
`

function Main({ windDirection, change, cities }) {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <TopMenu />

         <div className="regionButton">
            {cities.map((city) => (
               <StyledButton key={city} onClick={() => dispatch(fetchWeather(change(city)))}>
                  {city}
               </StyledButton>
            ))}
         </div>

         <h1
            style={{
               textAlign: 'center',
            }}
         >
            {weather && weather.name}날씨 정보
         </h1>
         {weather && (
            <div className="main">
               <div className="main_left">
                  <img className="weather_img" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                  <p>날씨 : {weather.weather[0].description}</p>
               </div>

               <div className="main_right">
                  <p>온도: {weather.main.temp}°C</p>
                  <p>체감온도: {weather.main.feels_like}°C</p>
                  <p>1시간 강수량: {weather.rain?.['1h'] ? `${weather.rain['1h']}mm` : '없음'}</p>

                  <p>습도: {weather.main.humidity}%</p>
                  <p>풍속: {weather.wind.speed} m/s</p>
                  <p>풍향: {windDirection(weather.wind.deg)}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default Main
