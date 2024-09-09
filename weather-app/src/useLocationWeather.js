import { useEffect, useState } from "react";

function convertToFlag(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function useLocationWeather(location) {
	const [locationName2, setLocationName2] = useState("");
	const [isLoading2, setIsLoading2] = useState(false);
	const [weather2, setWeather2] = useState({});
	const [error2, setError2] = useState("");

	useEffect(() => {
		async function getWeather() {
			if (location.length <= 2) return setWeather2({});

			try {
				setIsLoading2(true);

				const geoRes = await fetch(
					`https://geocoding-api.open-meteo.com/v1/search?name=${location}`
				);
				const geoData = await geoRes.json();
				if (!geoData.results) throw new Error("Location not found");
				console.log(geoData);
				const { latitude, longitude, name, country_code } = geoData.results.at(0);

				console.log(`${name}, ${convertToFlag(country_code)}`);
				setLocationName2(`${name}, ${convertToFlag(country_code)}`);

				const weatherRes = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,weather_code,cloud_cover&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,wind_direction_10m_dominant,wind_speed_10m_max&temperature_unit=fahrenheit`
				);
				const weatherData = await weatherRes.json();
				if (weatherData.error) throw new Error("Can't Fetch Weather");

				setWeather2(weatherData);
			} catch (err) {
				console.log(err);
				setError2(err.message);
			} finally {
				setIsLoading2(false);
			}
		}
		getWeather();
	}, [location]);
	return { locationName2, isLoading2, weather2, error2 };
}
