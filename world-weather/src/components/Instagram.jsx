import { BiLogoInstagramAlt } from "react-icons/bi";
import styles from "./Social.module.css";

function Instagram() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BiLogoInstagramAlt size={45} className={styles.instagram} />
				<h3 className={styles.instagram}>Instagram :</h3>
				<p>@_worldweather_inc</p>
			</div>
		</div>
	);
}

export default Instagram;
