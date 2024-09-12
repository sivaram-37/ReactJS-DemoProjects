import { useState } from "react";
import styles from "./SignInForm.module.css";

function SignInForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form className={styles.box} onSubmit={handleSubmit}>
			<label>Username</label>
			<input
				type="email"
				placeholder="test@email.com"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<label>Password</label>
			<input
				type="password"
				placeholder="********"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button>Login &rarr;</button>
		</form>
	);
}

export default SignInForm;
