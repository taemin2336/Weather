import { configureStore } from '@reduxjs/toolkit'
import weathersReducer from '../slice/weatherSlice'

const store = configureStore({
   reducer: {
      weather: weathersReducer,
   },
})
export default store
