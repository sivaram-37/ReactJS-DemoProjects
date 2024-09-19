import { BiLogoFacebookCircle } from "react-icons/bi";
import styles from "./Social.module.css";

function Facebook() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BiLogoFacebookCircle size={45} className={styles.facebook} />
				<h3 className={styles.facebook}>Facebook :</h3>
				<p>worldweather inc</p>
			</div>
		</div>
	);
}

export default Facebook;
