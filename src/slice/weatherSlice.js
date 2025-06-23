import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeather } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk('weathers/fetchWeathers', async (city) => {
   const response = await getWeather(city)
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      weathers: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weathers = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
