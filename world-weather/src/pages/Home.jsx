import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.home}>
			<PageNav />
			<section>
				<h1>
					See Weather all over the world.
					<br />
					WorldWeather keeps track of weather.
				</h1>
				<h2>A world map that tracks weather into every city you can think of.</h2>
				<Link to="app" className="cta">
					Start tracking now
				</Link>
			</section>
		</div>
	);
}

export default Home;
