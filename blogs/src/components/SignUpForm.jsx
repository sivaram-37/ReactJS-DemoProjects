import { useState } from "react";
import styles from "./SignupForm.module.css";

function handleSubmit(e) {
	e.preventDefault();
}

function SignupForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form className={styles.box} onSubmit={handleSubmit}>
			<label>Name</label>
			<input
				type="text"
				placeholder="Firstname + Surename"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label>Email</label>
			<input
				type="email"
				placeholder="test@email.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label>Password</label>
			<input
				type="password"
				placeholder="********"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button>Register &rarr;</button>
		</form>
	);
}

export default SignupForm;
