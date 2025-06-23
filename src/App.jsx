import Home from './component/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
      </Routes>
   )
}

export default App
