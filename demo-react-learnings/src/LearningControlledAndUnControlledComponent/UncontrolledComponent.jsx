import { useRef } from "react";

function UncontrolledComponent() {
	const nameRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		console.log("submit name on Uncontrolled Component = ", nameRef.current.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={nameRef} />
			<button>Submit</button>
		</form>
	);
}

export default UncontrolledComponent;
