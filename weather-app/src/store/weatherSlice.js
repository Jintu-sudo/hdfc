import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location, { rejectWithValue }) => {
        try {
            const geoRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
            )
            const geoData = await geoRes.json()
            if (!geoData.results || geoData.results.length === 0) {
                throw new Error('Location not found')
            }

            const { latitude, longitude, name } = geoData.results[0]

            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            )
            const weatherData = await weatherRes.json()
            const current = weatherData.current_weather

            return {
                place: name,
                date: current.time.split('T')[0],
                time: current.time.split('T')[1],
                temperature: current.temperature,
            }
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { data: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? 'Something went wrong'
            })
    },
})

export default weatherSlice.reducer