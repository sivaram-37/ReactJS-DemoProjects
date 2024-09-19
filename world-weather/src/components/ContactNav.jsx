import {
	BiLogoFacebookCircle,
	BiLogoGmail,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
	BiLogoWhatsapp,
} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
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
							<BsFillTelephoneFill color="#00c46a" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="instagram">
							<BiLogoInstagramAlt color="#E1306C" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="gmail">
							<BiLogoGmail color="#b23121" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="whatsapp">
							<BiLogoWhatsapp color="#00c46a" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="facebook">
							<BiLogoFacebookCircle color="#3b5998" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="twitter">
							<FaXTwitter color="#ffffff" size={30} />
						</NavLink>
					</li>
					<li>
						<NavLink to="linkedin">
							<BiLogoLinkedinSquare color="#0077B5" size={30} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default ContactNav;
