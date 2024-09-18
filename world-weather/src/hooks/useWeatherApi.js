import { useState } from "react";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export function useWeatherApi() {
	const [isLoading, setIsLoading] = useState(false);
	const [weatherData, setWeatherData] = useState({});
	const [error, setError] = useState(null);

	async function getWeather(lat, lng) {
		try {
			setIsLoading(true);
			setError("");
			const res = await fetch(
				`${BASE_URL}?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,weather_code,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit`
			);
			const data = await res.json();
			console.log(data);
			setWeatherData(data.current);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}
	return { getWeather, isLoading, error, weatherData };
}
