import Home from './component/Home'
import Whole from './component/Whole'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './component/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/whole" element={<Whole />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
