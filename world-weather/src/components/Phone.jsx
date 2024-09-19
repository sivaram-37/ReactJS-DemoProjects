import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "./Social.module.css";

function Phone() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BsFillTelephoneFill size={30} className={styles.phone} />
				<h3 className={styles.phone}>Phone :</h3>
				<p>(+91) 7892615892</p>
			</div>
		</div>
	);
}

export default Phone;
