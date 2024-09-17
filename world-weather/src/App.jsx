import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Weather from "./components/Weather";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						<Route path="weather" element={<Weather />} />
					</Route>
					<Route path="*" element={<h1>Page Not Found :(</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
