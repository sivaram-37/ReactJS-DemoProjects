import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			&copy; Copyright {new Date().getFullYear()} by WorldWeather inc.
		</footer>
	);
}

export default Footer;
