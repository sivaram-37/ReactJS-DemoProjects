import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
	return (
		<main>
			<PageNav />
			<section className={styles.pricing}>
				<div>
					<h2>
						Simple pricing.
						<br />
						Just $9/month.
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore
						mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
					</p>
				</div>
				<img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
			</section>
		</main>
	);
}

export default Pricing;
