import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Weather from "./components/Weather";
import PageNotFound from "./pages/PageNotFound";
import ContactUs from "./pages/ContactUs";
import Instagram from "./components/Instagram";
import WhatsApp from "./components/WhatsApp";
import Twitter from "./components/Twitter";
import LinkedIn from "./components/LinkedIn";
import Gmail from "./components/Gmail";
import Phone from "./components/Phone";
import Facebook from "./components/Facebook";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="product" element={<Product />} />
					<Route path="contact" element={<ContactUs />}>
						<Route index element={<Navigate replace to="phone" />} />
						<Route path="phone" element={<Phone />} />
						<Route path="instagram" element={<Instagram />} />
						<Route path="gmail" element={<Gmail />} />
						<Route path="whatsapp" element={<WhatsApp />} />
						<Route path="twitter" element={<Twitter />} />
						<Route path="linkedin" element={<LinkedIn />} />
						<Route path="facebook" element={<Facebook />} />
					</Route>
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
