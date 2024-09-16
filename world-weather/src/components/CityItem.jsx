/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesProvider";

function CityItem({ city }) {
	const { currentCity, deleteCity } = useCities();
	const { cityName, emoji, id, position } = city;

	function HandleDelete(e) {
		e.preventDefault();
		deleteCity(id);
	}

	return (
		<li>
			<Link
				to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
				className={`${styles.item} ${
					id === currentCity.id ? styles["item--active"] : ""
				}`}
			>
				<p className={styles.name}>{cityName}</p>
				<span className={styles.emoji}>{emoji}</span>
				<button className={styles.deleteBtn} onClick={HandleDelete}>
					&times;
				</button>
			</Link>
		</li>
	);
}

export default CityItem;
