import { NavLink } from "react-router-dom";
import styles from "./FormNav.module.css";

function FormNav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink to="signin">Sign in</NavLink>
				</li>
				<li>
					<NavLink to="signup">Sign up</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default FormNav;
