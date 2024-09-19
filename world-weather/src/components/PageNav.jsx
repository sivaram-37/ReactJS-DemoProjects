import { NavLink } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiFillRead } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
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
					<NavLink to="/">
						<BsFillHouseDoorFill size={20} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact">
						<LuContact size={22} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/product">
						<AiFillRead size={22} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PageNav;
