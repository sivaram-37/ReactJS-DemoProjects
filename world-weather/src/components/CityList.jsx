import { useCities } from "../contexts/CitiesProvider";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList() {
	const { cities } = useCities();

	return (
		<ul className={styles.list}>
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}

export default CityList;
