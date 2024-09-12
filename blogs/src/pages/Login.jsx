import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import FormNav from "../components/FormNav";

function Login() {
	return (
		<div className={styles.login}>
			<PageNav />
			<FormNav />
			<Outlet />
		</div>
	);
}

export default Login;
