import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
	return <img src="/logo.jpg" alt="logo" className={styles.logo} />;
}

export default Logo;
