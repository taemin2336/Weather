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
            content: `<div>서울</div>`,
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
            <div>
               <p style={{ textAlign: 'center' }}>마우스를 올리면 지역이름이 나옵니다.</p>
            </div>
            <div
               id="map"
               style={{
                  width: '100%',
                  height: '1600px',
                  textAlign: 'center',
               }}
            ></div>
         </div>
      </div>
   )
}

export default Map
