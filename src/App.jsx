import Home from './component/Home'
import Whole from './component/Whole'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './component/NotFound'
import Map from './component/Map'

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
const cities = ['서울', '인천', '대전', '광주', '대구', '울산', '부산', '제주']

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home windDirection={windDirection} change={change} cities={cities} />}></Route>
         <Route path="/whole" element={<Whole windDirection={windDirection} change={change} cities={cities} />}></Route>
         <Route path="/map" element={<Map windDirection={windDirection} change={change} cities={cities} />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
