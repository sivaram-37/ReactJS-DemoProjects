import { Link, Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import Footer from "./Footer";

function SideBar() {
	return (
		<aside className={styles.sidebar}>
			<Link className={styles.logo}>
				<img src="/icon.png" alt="logo" />
				<h1>World Weather</h1>
			</Link>

			<Outlet />

			<Footer />
		</aside>
	);
}

export default SideBar;
