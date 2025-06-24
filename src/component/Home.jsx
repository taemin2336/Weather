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

function Main() {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   const cities = ['서울', '인천', '대전', '광주', '대구', '울산', '부산', '제주']

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>

   const windDirection = (e) => {
      if (e < 23) {
         return '북풍'
      } else if (e < 68) {
         return '북동풍'
      } else if (e < 113) {
         return '동풍'
      } else if (e < 158) {
         return '남동풍'
      } else if (e < 203) {
         return '남풍'
      } else if (e < 248) {
         return '남서풍'
      } else if (e < 293) {
         return '서풍'
      } else if (e < 338) {
         return '북서풍'
      }
   }
   const change = (e) => {
      switch (e) {
         case '서울':
            return 'seoul'
         case '인천':
            return 'incheon'
         case '대전':
            return 'daejeon'
         case '광주':
            return 'gwangju'
         case '대구':
            return 'daegu'
         case '울산':
            return 'ulsan'
         case '부산':
            return 'busan'
         case '제주':
            return 'jeju'

         default:
            break
      }
   }

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
