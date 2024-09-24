import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Home";

const AnotherPage = lazy(() => import("./AnotherPage"));

function LearningRoutes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/another" element={<AnotherPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default LearningRoutes;
