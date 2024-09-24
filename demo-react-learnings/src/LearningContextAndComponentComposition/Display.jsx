import { useMyContext } from "./Context";

function Display() {
	const { name, message } = useMyContext();
	return (
		<div>
			<p>{`"${message}"`}</p>
			<p>-{name}</p>
		</div>
	);
}

export default Display;
