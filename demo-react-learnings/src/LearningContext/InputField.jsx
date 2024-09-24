import { useMyContext } from "./Context";

function InputField() {
	const { name, setName, message, setMessage } = useMyContext();
	return (
		<div>
			<h1>Quotes</h1>
			<input
				type="text"
				value={message}
				placeholder="Quotes"
				onChange={(e) => setMessage(e.target.value)}
			/>
			<input
				type="text"
				value={name}
				placeholder="Author"
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
}

export default InputField;
