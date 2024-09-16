import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.title}>
				<img src="/icon.png" alt="logo" />
				<h1>World Weather</h1>
			</div>

			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/pricing">Pricing</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PageNav;
