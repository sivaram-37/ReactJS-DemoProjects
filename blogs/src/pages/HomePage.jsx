import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";

function HomePage() {
	return (
		<div className={styles.homepage}>
			<PageNav />
			<section>
				<h1>Welcome to The React Blog...</h1>
				<h2>Write your own blogs at super convenient</h2>
				<Link to="app">
					<button>Happy Blogging &rarr;</button>
				</Link>
			</section>
		</div>
	);
}

export default HomePage;
