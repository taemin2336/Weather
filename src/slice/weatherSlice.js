import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeather } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk('weathers/fetchWeathers', async (city) => {
   const response = await getWeather(city)
   return response.data
})

export const fetchCity = createAsyncThunk('weathers/fetchCitys', async (city) => {
   const response = await getWeather(city)
   return response.data
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      weather: null,
      citys: [],
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
            state.weather = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchCity.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchCity.fulfilled, (state, action) => {
            state.loading = false
            state.citys = [...state.citys, action.payload]
         })
         .addCase(fetchCity.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
