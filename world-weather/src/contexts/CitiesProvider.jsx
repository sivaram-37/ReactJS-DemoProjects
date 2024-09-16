/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [cities, setCities] = useState([]);
	const [currentCity, setCurrentCity] = useState({});
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch {
				setError("Failed to fetch cities from local server");
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);

	async function getCity(id) {
		if (currentCity.id === id) return;
		try {
			setIsLoading(true);
			setError("");
			const res = await fetch(`${BASE_URL}/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		} catch {
			setError("There was an error while Loading the city...");
		} finally {
			setIsLoading(false);
		}
	}

	async function createCity(newCity) {
		try {
			setIsLoading(true);
			setError("");
			const res = await fetch(`${BASE_URL}/cities`, {
				method: "POST",
				body: JSON.stringify(newCity),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setCities((cities) => [...cities, data]);
		} catch {
			setError("There was an error while creating the city...");
		} finally {
			setIsLoading(false);
		}
	}

	async function deleteCity(id) {
		try {
			setIsLoading(true);
			setError("");
			await fetch(`${BASE_URL}/cities/${id}`, {
				method: "DELETE",
			});

			setCities(cities.filter((city) => city.id !== id));
		} catch {
			setError("There was an error while deleting the city...");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<CitiesContext.Provider
			value={{
				cities,
				isLoading,
				currentCity,
				error,
				getCity,
				createCity,
				deleteCity,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
	const context = useContext(CitiesContext);
	if (context === undefined)
		throw new Error("Trying to use CitiesContext outside of CitiesProvider");
	return context;
}

export { CitiesProvider, useCities };
