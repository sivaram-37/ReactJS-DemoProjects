import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function LearningSuspense() {
	return (
		<div>
			<h1>Learning Suspense</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<LazyComponent />
			</Suspense>
		</div>
	);
}

export default LearningSuspense;
