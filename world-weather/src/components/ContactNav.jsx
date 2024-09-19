import {
	BiLogoGmail,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
	BiLogoWhatsapp,
	BiPhone,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import styles from "./ContactNav.module.css";

function ContactNav() {
	return (
		<>
			<nav className={styles.cont}>
				<h1>Contact us By</h1>
				<ul>
					<li>
						<NavLink to="phone">
							<BiPhone color="#fff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="instagram">
							<BiLogoInstagramAlt color="#fff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="gmail">
							<BiLogoGmail color="#fff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="whatsapp">
							<BiLogoWhatsapp color="#fff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="twitter">
							<FaXTwitter color="#fff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="linkedin">
							<BiLogoLinkedinSquare color="#fff" size={30} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default ContactNav;
