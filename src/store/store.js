import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../slice/mapSlice'
import weathersReducer from '../slice/weatherSlice'

const store = configureStore({
   reducer: {
      weather: weathersReducer,
      map: mapReducer,
   },
})
export default store
