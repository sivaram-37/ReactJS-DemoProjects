import { useReducer } from "react";

const initialState = {
	balance: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "account/deposit":
			return { ...state, balance: state.balance + action.payload };
		case "account/withdraw":
			return { ...state, balance: state.balance - action.payload };
		default:
			throw new Error("Unknow action");
	}
}

function Account() {
	const [{ balance }, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>Balance : ${balance}</h1>
			<button onClick={() => dispatch({ type: "account/deposit", payload: 100 })}>
				Deposit $100
			</button>
			<button onClick={() => dispatch({ type: "account/withdraw", payload: 50 })}>
				Withdraw $50
			</button>
		</div>
	);
}

export default Account;
