import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesProvider";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import Form from "./components/Form";

function App() {
	return (
		<div>
			<CitiesProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path="pricing" element={<Pricing />} />
						<Route path="login" element={<Login />} />
						<Route path="app" element={<AppLayout />}>
							<Route index element={<Navigate replace to="cities" />} />
							<Route path="cities" element={<CityList />} />
							<Route path="cities/:id" element={<CityList />} />
							<Route path="form" element={<Form />} />
						</Route>
						<Route path="*" element={<h1>Page Not Found :(</h1>} />
					</Routes>
				</BrowserRouter>
			</CitiesProvider>
		</div>
	);
}

export default App;
