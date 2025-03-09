import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from "dotenv"
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; 

// Thunk to Fetch Weather Data
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to fetch weather");

      return { location, temp: data.main.temp, condition: data.weather[0].description };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { weatherData: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData[action.payload.location] = {
          temp: action.payload.temp,
          condition: action.payload.condition,
        };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
