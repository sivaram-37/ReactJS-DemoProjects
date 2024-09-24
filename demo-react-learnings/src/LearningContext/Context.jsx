import { createContext, useContext, useState } from "react";

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
function Context({ children }) {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	return (
		<MyContext.Provider value={{ name, setName, message, setMessage }}>
			{children}
		</MyContext.Provider>
	);
}

function useMyContext() {
	const context = useContext(MyContext);
	return context;
}

export { Context, useMyContext };
