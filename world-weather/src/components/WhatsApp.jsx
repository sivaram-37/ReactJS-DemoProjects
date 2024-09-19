import { BiLogoWhatsapp } from "react-icons/bi";
import styles from "./Social.module.css";

function WhatsApp() {
	return (
		<div className={styles.social}>
			<div className={styles.div}>
				<BiLogoWhatsapp size={45} className={styles.whatsapp} />
				<h3 className={styles.whatsapp}>WhatsApp :</h3>
				<p>(+91) 7892615892</p>
			</div>
		</div>
	);
}

export default WhatsApp;
