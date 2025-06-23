import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const AUTH_KEY = import.meta.env.Api_Key

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `${API_KEY}`,
   },
})

export const getWeather = async (city = 'seoul') => {
   const response = await weatherApi.get(`${city}&appid=${AUTH_KEY}&units=metric&lang=kr`)
   return response
}

export default weatherApi
