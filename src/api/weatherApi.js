import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const AUTH_KEY = import.meta.env.VITE_Api_Key

export const getWeather = async (city = 'seoul') => {
   const response = await axios.get(`${BASE_URL}${city}&appid=${AUTH_KEY}&units=metric&lang=kr`)
   return response
}
