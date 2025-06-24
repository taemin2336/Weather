import { useDispatch, useSelector } from 'react-redux'
import TopMenu from './TopMenu'
import { fetchWeather } from '../slice/weatherSlice'

function Whole() {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   dispatch(fetchWeather('seoul'))

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>
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
         {weather.main.temp}
      </div>
   )
}

export default Whole
