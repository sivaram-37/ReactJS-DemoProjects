import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
	return (
		<header className={styles.header}>
			<h1>The React Blog</h1>
			<input type="text" placeholder="🔍 Search for blog" />
			<ul>
				<li>X Blog Found</li>
				<li>
					<Link to="/">Logout</Link>
				</li>
			</ul>
		</header>
	);
}

export default AppNav;
