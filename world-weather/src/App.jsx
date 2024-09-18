import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Weather from "./components/Weather";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="product" element={<Product />} />
					<Route path="app" element={<AppLayout />}>
						<Route index element={<Navigate replace to="weather" />} />
						<Route path="weather" element={<Weather />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
