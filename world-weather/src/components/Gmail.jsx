import { BiLogoGmail } from "react-icons/bi";
import styles from "./Social.module.css";

function Gmail() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BiLogoGmail size={45} className={styles.gmail} />
				<h3 className={styles.gmail}>Gmail :</h3>
				<p>support@worldweather.com</p>
			</div>
		</div>
	);
}

export default Gmail;
