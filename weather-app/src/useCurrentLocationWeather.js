import { useState } from "react";

const API_KEY = "0dd8feb4b1e14a44b2495995697cb021";

function convertToFlag(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function useCurrentLocationWeather() {
	const [error1, setError1] = useState("");
	const [isLoading1, setIsLoading1] = useState("");
	const [locationName1, setLocationName1] = useState("");
	const [weather1, setWeather1] = useState({});

	function getCurrentLocationWeather(searchFromLocation = false) {
		if (searchFromLocation) return setWeather1({});
		if (!navigator.geolocation)
			throw new Error("Geolocation is not supported in your browser!");

		try {
			setIsLoading1(true);

			navigator.geolocation.getCurrentPosition(async (pos) => {
				const res = await fetch(
					`https://api.opencagedata.com/geocode/v1/json?q=${pos.coords.latitude}+${pos.coords.longitude}&key=${API_KEY}`
				);
				const data = await res.json();
				const { county: name, country_code } = data.results.at(0).components;

				setLocationName1(`${name}, ${convertToFlag(country_code)}`);

				const weatherRes = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,weather_code,cloud_cover&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,wind_direction_10m_dominant,wind_speed_10m_max&temperature_unit=fahrenheit`
				);
				const weatherData = await weatherRes.json();
				if (weatherData.error) throw new Error("Can't Fetch Weather");

				setWeather1(weatherData);
				console.log(weatherData);
				console.log(weatherData.daily.wind_direction_10m_dominant);

				const d = new Date(weatherData.daily.sunrise.at(0));
				console.log(d.getUTCHours());
				console.log(d.toISOString());
				console.log(d.toLocaleTimeString());

				const d1 = new Date(weatherData.daily.sunset.at(0));
				console.log(d1.getUTCHours());
				console.log(d1.toISOString());
				console.log(d1.toLocaleTimeString());

				setIsLoading1(false);
			});
		} catch (err) {
			console.log(err.message);
			setError1(err.message);
			setIsLoading1(false);
		}
	}
	return { getCurrentLocationWeather, isLoading1, error1, locationName1, weather1 };
}
