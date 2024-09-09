import { useState } from "react";
import { useCurrentLocationWeather } from "./useCurrentLocationWeather";
import { useLocationWeather } from "./useLocationWeather";

export default function App() {
	const [location, setLocation] = useState("");

	const { getCurrentLocationWeather, isLoading1, error1, locationName1, weather1 } =
		useCurrentLocationWeather();

	const { locationName2, isLoading2, weather2, error2 } = useLocationWeather(location);

	function handleSearchFromLocation(e) {
		setLocation(e.target.value);
		getCurrentLocationWeather(true);
	}

	function handleGetCurrentLocationWeather() {
		setLocation("");
		getCurrentLocationWeather();
	}

	return (
		<div className="app">
			<Header />

			<MainApp>
				<SearchForm
					location={location}
					onHandleSearch={handleSearchFromLocation}
					onHandleClick={handleGetCurrentLocationWeather}
				/>

				{(weather1?.daily && (
					<Weather
						isLoading={isLoading1}
						error={error1}
						cityName={locationName1}
						weatherData={weather1}
					/>
				)) ||
					(weather2.daily && (
						<Weather
							isLoading={isLoading2}
							error={error2}
							cityName={locationName2}
							weatherData={weather2}
						/>
					))}
			</MainApp>

			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header>
			<h1>Weather Daily</h1>
		</header>
	);
}

function MainApp({ children }) {
	return <main>{children}</main>;
}

function SearchForm({ location, onHandleSearch, onHandleClick }) {
	return (
		<div className="search-form">
			<input
				type="text"
				placeholder="SearcH FroM LocatioN"
				value={location}
				onChange={onHandleSearch}
			/>
			<h2>OR</h2>
			<button onClick={onHandleClick}>GeT WeatheR FoR CurrenT LocatioN</button>
		</div>
	);
}

function Weather({ isLoading, error, cityName, weatherData }) {
	return (
		<div className="weather">
			<Today
				isLoading={isLoading}
				error={error}
				cityName={cityName}
				weatherData={weatherData}
			/>
			<Forecast weatherData={weatherData} />
		</div>
	);
}

function Today({ isLoading, error, cityName, weatherData }) {
	const {
		temperature_2m_max: max,
		temperature_2m_min: min,
		weathercode: codes,
		wind_speed_10m_max: windspeed,
		uv_index_max,
		daylight_duration,
	} = weatherData.daily;

	const {
		cloud_cover,
		relative_humidity_2m: humidity,
		temperature_2m: current_temp,
		wind_speed_10m: wind_speed,
		wind_direction_10m: wind_direction,
	} = weatherData.current;

	return (
		<>
			<div className="today">
				<div className="title">
					{error && <h3>{error}</h3>}
					{isLoading && <h3>Loading...</h3>}

					<h3>WeatheR IN {cityName}</h3>
				</div>
				<div className="info">
					<p className="date">TodaY</p>
					<p className="icon">{getWeatherIcon(codes.at(0)) || "Weather code icon"}</p>
					<p className="text">
						{min.at(0)}&deg;f &mdash; {max.at(0)}&deg;f
					</p>
				</div>
				<div className="add-info">
					<p className="icon">
						🌞&larr;
						<span className="text" style={{ color: "#c4790a" }}>
							{(daylight_duration.at(0) / 3600).toFixed(2)} hours
						</span>
						&rarr;🌜
					</p>
					<p className="text">
						Cloud Cover : <span className="text-ans">{cloud_cover}%</span>
					</p>
					<p className="text">
						Current Temperature : <span className="text-ans">{current_temp}&deg;F</span>
					</p>
					<p className="text">
						Current Wind Direction :{" "}
						<span className="text-ans">
							From{" "}
							{wind_direction > 337.5 && wind_direction <= 22.5
								? "North"
								: wind_direction > 22.5 && wind_direction <= 67.5
								? "North-East"
								: wind_direction > 67.5 && wind_direction <= 112.5
								? "East"
								: wind_direction > 112.5 && wind_direction <= 157.5
								? "South-East"
								: wind_direction > 157.5 && wind_direction <= 202.5
								? "South"
								: wind_direction > 202.5 && wind_direction <= 247.5
								? "South-West"
								: wind_direction > 247.5 && wind_direction <= 292.5
								? "West"
								: "North-West"}
						</span>
					</p>
					<p className="text">
						Current Wind Speen : <span className="text-ans">{wind_speed} Km/h</span>
					</p>
					<p className="text">
						Humidity : <span className="text-ans">{humidity}%</span>
					</p>
					<p className="text">
						Maximum Wind Speed :{" "}
						<span className="text-ans">{`${windspeed.at(0)} Km/h`}</span>
					</p>
					<p className="text">
						UV Index : <span className="text-ans">{uv_index_max.at(0)}</span>
					</p>
				</div>
			</div>
		</>
	);
}

function Forecast({ weatherData }) {
	const {
		time: dates,
		temperature_2m_max: max,
		temperature_2m_min: min,
		weathercode: codes,
	} = weatherData.daily;

	return (
		<ul className="forecast">
			{dates.map(
				(date, ind) =>
					ind !== 0 && (
						<Day
							key={date}
							date={date}
							code={codes.at(ind)}
							min={min.at(ind)}
							max={max.at(ind)}
						/>
					)
			)}
		</ul>
	);
}

function Day({ code, min, max, date }) {
	return (
		<li className="day">
			<p className="date">{formatDay(date)}</p>
			<p className="icon">{getWeatherIcon(code)}</p>
			<p className="text">
				{Math.floor(min)}&deg;f &mdash; {Math.ceil(max)}&deg;f
			</p>
		</li>
	);
}

function Footer() {
	return (
		<footer>
			<p>&copy; 2023 Weather Daily. All rights reserved.</p>
		</footer>
	);
}

function formatDay(dateStr) {
	return new Intl.DateTimeFormat("en", {
		weekday: "short",
	}).format(new Date(dateStr));
}

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
