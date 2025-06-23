import { configureStore } from '@reduxjs/toolkit'
import weathersReducer from '../slide/weatherSlide'

const store = configureStore({
   reducer: {
      weather: weathersReducer,
   },
})
export default store
