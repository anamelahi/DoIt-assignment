import axios from "axios";
import env from "dotenv"

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; 

// ?lat={lat}&lon={lon}&appid={API key}
export const getWeatherInfo = async (city) => {
    try {
        // Step 1: Get latitude and longitude for the city
        const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
            params: {
                q: 'Delhi',
                limit: 1,
                appid: API_KEY
            }
        });

        if (!geoResponse.data.length) {
            console.error("Invalid city name or no location found.");
            return null;
        }

        const { lat, lon } = geoResponse.data[0]; // Extract latitude and longitude

        // Step 2: Get weather data using lat/lon
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: "metric" // Adjust for temperature units (metric/imperial)
            }
        });

        console.log(weatherResponse.data); // Log or return the data
        return weatherResponse.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};
