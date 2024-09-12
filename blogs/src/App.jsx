import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import SignInForm from "./components/SignInForm";
import SignupForm from "./components/SignupForm";
import AppLayout from "./pages/AppLayout";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />}>
						<Route index element={<Navigate to="signin" />} />
						<Route path="signin" element={<SignInForm />} />
						<Route path="signup" element={<SignupForm />} />
					</Route>
					<Route path="app" element={<AppLayout />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
