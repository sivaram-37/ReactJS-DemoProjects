import { BiLogoLinkedinSquare } from "react-icons/bi";
import styles from "./Social.module.css";

function LinkedIn() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BiLogoLinkedinSquare size={45} className={styles.linkedin} />
				<h3 className={styles.linkedin}>LinkedIn :</h3>
				<p>www.linkedin.com/in/worldweather-inc</p>
			</div>
		</div>
	);
}

export default LinkedIn;
