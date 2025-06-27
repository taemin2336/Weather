// Map.jsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { kakaoMap } from '../slice/mapSlice'
import TopMenu from './TopMenu'
import { fetchWeather } from '../slice/weatherSlice'

const Map = ({ windDirection, change, cities }) => {
   const dispatch = useDispatch()
   const { loading2 } = useSelector((state) => state.map)
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(kakaoMap())

      if (!loading2) return

      const mapContainer = document.getElementById('map')
      const mapOption = {
         center: new window.kakao.maps.LatLng(36, 128),
         level: 13,
      }
      var map = new window.kakao.maps.Map(mapContainer, mapOption)

      var positions = [
         {
            content: `<div>서울${dispatch(fetchWeather())}</div>`,
            latlng: new kakao.maps.LatLng(37.566535, 126.9779692),
         },
         {
            content: '<div>인천</div>',
            latlng: new kakao.maps.LatLng(37.4562557, 126.7052062),
         },
         {
            content: '<div>대전</div>',
            latlng: new kakao.maps.LatLng(36.3504119, 127.3845475),
         },
         {
            content: '<div>광주</div>',
            latlng: new kakao.maps.LatLng(35.1595454, 126.8526012),
         },
         {
            content: '<div>대구</div>',
            latlng: new kakao.maps.LatLng(35.8714354, 128.601445),
         },
         {
            content: '<div>울산</div>',
            latlng: new kakao.maps.LatLng(35.5383773, 129.3113596),
         },
         {
            content: '<div>부산</div>',
            latlng: new kakao.maps.LatLng(35.1795543, 129.0756416),
         },
         {
            content: '<div>제주</div>',
            latlng: new kakao.maps.LatLng(33.4996213, 126.5311884),
         },
      ]

      for (var i = 0; i < positions.length; i++) {
         // 마커를 생성합니다
         var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
         })

         // 마커에 표시할 인포윈도우를 생성합니다
         var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content, // 인포윈도우에 표시할 내용
         })

         // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
         // 이벤트 리스너로는 클로저를 만들어 등록합니다
         // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
         kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
         kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))
      }
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map, marker, infowindow) {
         return function () {
            infowindow.open(map, marker)
         }
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(infowindow) {
         return function () {
            infowindow.close()
         }
      }
   }, [dispatch, loading2])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>
   return (
      <div>
         <TopMenu />
         <div>
            <div id="map" style={{ width: '500px', height: '600px' }}></div>
            <div
               style={{
                  width: '500px',
               }}
            >
               <div className="regionButton">
                  {cities.map((city) => (
                     <button key={city} onClick={() => dispatch(fetchWeather(change(city)))}>
                        {city}
                     </button>
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
         </div>
      </div>
   )
}

export default Map
