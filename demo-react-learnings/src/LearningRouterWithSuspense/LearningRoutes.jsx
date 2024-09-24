import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Home";

const AnotherPage = lazy(() => import("./AnotherPage"));

function LearningRoutes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/another" element={<AnotherPage />}>
						<Route index element={<Navigate replace to="/another/old" />} />
						<Route path="/another/old" element={<p>Old Element</p>} />
						<Route path="/another/new" element={<p>New Element</p>} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default LearningRoutes;
