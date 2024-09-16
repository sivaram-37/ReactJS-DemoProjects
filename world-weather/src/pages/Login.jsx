import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Button from "../components/Button";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<PageNav />
			<main className={styles.login}>
				<form className={styles.form}>
					<div className={styles.row}>
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>

					<div className={styles.row}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>

					<div className={styles.button}>
						<Button type="primary">Login</Button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default Login;
