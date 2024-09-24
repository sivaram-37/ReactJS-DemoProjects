import { useState } from "react";

function ControlledComponent() {
	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Submited name on Controlled Component = ", name);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button>Submit</button>
		</form>
	);
}

export default ControlledComponent;
