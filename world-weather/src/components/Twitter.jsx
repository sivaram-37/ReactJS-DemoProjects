import { FaXTwitter } from "react-icons/fa6";
import styles from "./Social.module.css";

function Twitter() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<FaXTwitter size={40} className={styles.twitter} />
				<h3 className={styles.twitter}>Twitter :</h3>
				<p>@WorldWeather_inc</p>
			</div>
		</div>
	);
}

export default Twitter;
