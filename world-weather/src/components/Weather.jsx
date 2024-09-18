import { useEffect, useState } from "react";
import { useURLPosition } from "../hooks/useURLPosition";
import { WiHumidity, WiStrongWind, WiCloud } from "react-icons/wi";
import Message from "../components/Message";
import Spinner from "../components/Spinner";
import styles from "./Weather.module.css";

const API_KEY_REVERSE_GEOCODING = "0dd8feb4b1e14a44b2495995697cb021";
const BASE_URL_GET_CITYNAME = "https://api.opencagedata.com/geocode/v1/json";
const BASE_URL_GET_WEATHER = "https://api.open-meteo.com/v1/forecast";

function getWeatherIcon(wmoCode) {
	const icons = new Map([
		[[0], "☀️"],
		[[1], "🌤️"],
		[[2], "🌥️"],
		[[3], "☁️"],
		[[45, 48], "🌫️"],
		[[51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "🌧️"],
		[[71, 73, 75, 77, 85, 86], "🌨️"],
		[[95], "🌩️"],
		[[96, 99], "⛈️"],
	]);
	const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
	if (!arr) return "NOT FOUND";
	return icons.get(arr);
}

function Weather() {
	const [lat, lng] = useURLPosition();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [cityName, setCityName] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [weatherCurrent, setWeatherCurrent] = useState({});

	useEffect(
		function () {
			if (!lat & !lng) return;

			async function getWeather() {
				try {
					setIsLoading(true);
					setError("");

					const getCityNameRes = await fetch(
						`${BASE_URL_GET_CITYNAME}?q=${lat}+${lng}&key=${API_KEY_REVERSE_GEOCODING}`
					);
					const weatherRes = await fetch(
						`${BASE_URL_GET_WEATHER}?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,weather_code,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit`
					);

					const getCityNameData = await getCityNameRes.json();
					const weatherData = await weatherRes.json();

					if (!getCityNameData.results.at(0))
						throw new Error("Failed to fetch city name");
					if (getCityNameData.results.at(0)?.components.body_of_water)
						throw new Error("Click on land to see weather");
					if (!weatherData.current) throw new Error("Failed to fetch weather");

					const { city, town, county, state_district, state, country } =
						getCityNameData.results.at(0).components;
					setCityName(city || town || county || state_district);
					setState(state);
					setCountry(country);

					setWeatherCurrent(weatherData.current);
				} catch (err) {
					setError(err.message);
				} finally {
					setIsLoading(false);
				}
			}
			getWeather();
		},
		[lat, lng]
	);

	if (!lat && !lng)
		return <Message message="See Weather by clicking on anywhere on the map 🎯" />;

	if (error) return <Message message={error} />;

	if (isLoading) return <Spinner />;

	return (
		<div className={styles.weather}>
			<header>
				<h1>{cityName}</h1>
				<p>
					{state ? `${state},` : ""} {country}
				</p>
			</header>
			<section>
				<div className={styles.grid_1}>
					<div className={styles.flexCol}>
						<p className={styles.topic}>Temperature</p>
						<p className={styles.temp}>{weatherCurrent.temperature_2m} &deg;F</p>
					</div>
				</div>
				<div className={styles.grid_2}>
					<div className={styles.flexCol}>
						<p className={styles.topic}>Weather Code</p>
						<p className={styles.weatherCode}>
							{getWeatherIcon(weatherCurrent.weather_code)}
						</p>
					</div>
					<div className={styles.flexCol}>
						<p className={styles.topic}>Cloud cover</p>
						<WiCloud size={40} />
						<p className={styles.val}>{weatherCurrent.cloud_cover} %</p>
					</div>
				</div>
				<div className={styles.grid_2}>
					<div className={styles.flexCol}>
						<p className={styles.topic}>Humidity</p>
						<WiHumidity size={40} />
						<p className={styles.val}>{weatherCurrent.relative_humidity_2m} %</p>
					</div>
					<div className={styles.flexCol}>
						<p className={styles.topic}>Wind Speed</p>
						<WiStrongWind size={40} />
						<p className={styles.val}>{weatherCurrent.wind_speed_10m} Km/h</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Weather;
