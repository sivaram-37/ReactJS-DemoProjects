import { Outlet } from "react-router-dom";

function AnotherPage() {
	return (
		<div>
			Another Page
			<Outlet />
		</div>
	);
}

export default AnotherPage;
