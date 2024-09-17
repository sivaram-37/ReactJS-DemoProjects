import { useState } from "react";

export function useWeatherApi() {
	const [isLoading, setIsLoading] = useState(false);
	const [weatherData, setWeatherData] = useState({});
	const [error, setError] = useState(null);

	async function weatherAPI(lat, lng) {
		try {
			setIsLoading(true);
			const res = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,weather_code,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit`
			);
			if (!res.data) throw new Error("Failed to fetch weather");

			const data = await res.json();
			console.log(data);
			setWeatherData(data.current);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}
	return { weatherAPI, isLoading, error, weatherData };
}
