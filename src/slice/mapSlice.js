import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const kakaoMap = createAsyncThunk('map/loadSDK', async () => {
   return new Promise((resolve) => {
      if (window.kakao && window.kakao.maps) {
         resolve('already loaded')
         return
      }

      const script = document.createElement('script')
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP}&autoload=false`
      script.async = true

      script.onload = () => {
         window.kakao.maps.load(() => {
            resolve('loaded')
         })
      }

      document.head.appendChild(script)
   })
})

const mapSlice = createSlice({
   name: 'map',
   initialState: {
      loading2: false,
      status: 'idle',
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(kakaoMap.pending, (state) => {
            state.status = 'loading2'
         })
         .addCase(kakaoMap.fulfilled, (state) => {
            state.status = 'succeeded'
            state.loading2 = true
         })
         .addCase(kakaoMap.rejected, (state) => {
            state.status = 'failed'
            state.loading2 = false
         })
   },
})

export default mapSlice.reducer
