import { Outlet } from "react-router-dom";
import styles from "./ContactUs.module.css";
import PageNav from "../components/PageNav";
import ContactNav from "../components/ContactNav";

function ContactUs() {
	return (
		<div className={styles.contact}>
			<PageNav />
			<ContactNav />
			<Outlet />
		</div>
	);
}

export default ContactUs;
